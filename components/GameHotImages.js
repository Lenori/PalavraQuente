import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, AppRegistry, Dimensions} from 'react-native';

class GameHotImages extends Component {

  static defaultProps = {



  }

  state = {



  }

  render(){
    return(

      <View>

        <Image
          resizeMode = 'cover'
          style = {styles.image}
          source = {require('../assets/img/hot/flame.png')}
        />

      </View>

    );
  }

  componentDidMount() {

  }

}

const styles = StyleSheet.create({

  image: {
      padding: 10,
      width: Dimensions.get('window').width * 0.5,
      overflow: 'visible'
    }

});

export default GameHotImages;
