import {Audio} from 'expo-av';
import Assets from 'expo';
import * as FileSystem from 'expo-file-system';

const ext = 'mp3';

const playList = [

  {
    id: 1,
    name: 'play',
    url: 'http://35.247.234.76/palavraquente/mp3/play.'+ ext +'',
    localUrl: ''
  },
  {
    id: 2,
    name: 'clock',
    url: 'http://35.247.234.76/palavraquente/mp3/clock.'+ ext +'',
    localUrl: ''
  },
  {
    id: 3,
    name: 'pass',
    url: 'http://35.247.234.76/palavraquente/mp3/pass.'+ ext +'',
    localUrl: ''
  },
  {
    id: 4,
    name: 'end',
    url: 'http://35.247.234.76/palavraquente/mp3/end.'+ ext +'',
    localUrl: ''
  }

];

const sons = {};

export async function LoadSounds() {

  playList.map(async (som, index) => {

    var soundFile = '';

    FileSystem.downloadAsync(
      som.url,
      FileSystem.cacheDirectory + som.name + '.'+ ext +''
    )
      .then(({ uri }) => {
        playList[index].localUrl = 'require("'+ uri +'")';
      })
      .catch(error => {
        console.error(error);
      });

    sons[som.name] = new Audio.Sound();
    await sons[som.name].loadAsync({
      uri: FileSystem.cacheDirectory + som.name + '.'+ ext +''
    });

  });

}

export async function PlaySound(som, rate) {

  if (!rate)
    rate = 1.0;

  sons[som].playFromPositionAsync(0)
  sons[som].setRateAsync(rate, false)
  sons[som].playAsync();

}

export async function StopSound(som) {

  sons[som].stopAsync();

}
