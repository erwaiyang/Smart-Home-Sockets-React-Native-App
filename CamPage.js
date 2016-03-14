'use strict';

import React from 'react-native';
import Video from 'react-native-video';
import Dimensions from 'Dimensions';

import * as MY_KEYS from './constants/keys';

import {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    WebView,
    View
  } from 'react-native';

var {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
var videoWidth = deviceWidth,
    videoHeight = 262;
// var videoWidth = deviceWidth,
//     videoHeight = Math.round((deviceWidth/16)*9);

var styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  pageContainer:{
    flex: 1,
    backgroundColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 10
  },
  fullScreen: {
    flex: 1,
    position: 'absolute',
    top: 50,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoStyle: {
    width: videoWidth,
    height: videoHeight
  }
});

class MyVideo extends Component {
  constructor(props){
    super(props);
    this.state = {
      url : `http://stream-mcs.mediatek.com/${MY_KEYS.DEVICE_ID}/${MY_KEYS.DEVICE_KEY}/${MY_KEYS.VIDEO_DATA_CHANNEL}`
    };
  }
  render() {
    //ar URL = `http://stream-mcs.mediatek.com/${MY_KEYS.DEVICE_ID}/${MY_KEYS.DEVICE_KEY}/${MY_KEYS.VIDEO_DATA_CHANNEL}/320/240`;
      console.log(URL);
      return (
        <View style={styles.pageContainer}>
          <View style={styles.fullScreen}>
                <WebView
                    ref='webview'
                    automaticallyAdjustContentInsets={false}
                    style={styles.videoStyle}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        </View>
      );
    };
  }

class CamPage extends Component {
      render (){
        return (
          <NavigatorIOS
              style={styles.container}
              initialRoute={{
          title: '即時畫面',
          component: MyVideo
          }}/>
        );
    }
}

export default CamPage;

// <Video style={[styles.fullScreen, styles.videoStyle]}
//     key='ed.mp4'
//     source={{uri: URL}}
//      rate={1.0}
//      volume={1.0}
//      muted={false}
//      paused={false}
//      resizeMode="cover"
//      repeat={false}
//       />
