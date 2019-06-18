import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {PlaySound, StopSound, LoadSounds} from '../services/Sons';

class Palavra extends Component {

  static defaultProps = {

    palavras: ''

  }

  state = {

    palavra: '',
    count: '0'

  }

  updatePalavra(index) {

    PlaySound('pass');

    this.state.count++;

    if (this.state.count == this.props.palavras.length)
      this.state.count = '0';

    this.setState({

      palavra: this.props.palavras[index]

    });

  }

  render(){

    return(

        <View>

          <Text

          style = {{

            textAlign: 'center',
            justifyContent: 'center',
            margin: 20,
            color: 'white',
            textTransform: 'uppercase',
            fontSize: 20

          }}

          >{this.state.palavra}</Text>

          <Button
            color = '#a62020'
            title = 'Próxima!'
            onPress = {this.updatePalavra.bind(this, this.state.count)}
          />
        </View>

    );
  }

  componentDidMount() {

    this.updatePalavra(this.state.count)

  }

}

export default Palavra;
