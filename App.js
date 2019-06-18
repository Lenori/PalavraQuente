import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {AppLoading} from 'expo';

import Palavra from './components/Palavra';
import GameHotImages from './components/GameHotImages';

import {PegarPalavras} from './services/PegarPalavras';
import {PlaySound, StopSound, LoadSounds} from './services/Sons';

class App extends Component {

  state = {

    playing: false,
    playTime: 60000,
    palavras: ''

  }

  startPlaying(game) {

    PlaySound('play');
    PlaySound('clock', 1.4);

    this.setState({
      playing: true
    });

    const clockSpeeders = [
      {rate: 1.5, time: 25},
      {rate: 1.6, time: 35},
      {rate: 1.7, time: 45},
      {rate: 1.8, time: 50},
      {rate: 1.9, time: 55}
    ]

    clockSpeeders.map(item => {

      setTimeout(function(){
        PlaySound('clock', item.rate);
      }, item.time * 1000)

    });

    setTimeout(function(){
      game.endRound(game);
    }, this.state.playTime);

  }

  endRound(game) {

    PlaySound('end');
    StopSound('clock');

    game.setState({
      playing: false
    });

  }

  render() {

    const game = this;

    return (

      <View style={styles.container}>

      {
        this.state.playing

          ? // Playing is true

            <>

            <Palavra
              palavras = {this.state.palavras.split(',')}
            />

            </>

          : // Playing is false

            <Button
              color = '#a62020'
              title = 'Jogar!'
              onPress = {this.startPlaying.bind(this, game)}
            />
      }

      </View>
    );
  }

  async componentDidMount() {

    LoadSounds();

    const palavras = await PegarPalavras.list();
    this.setState({palavras});

  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#b34619',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;
