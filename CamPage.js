'use strict';

import React from 'react-native';
import Video from 'react-native-video';
import Dimensions from 'Dimensions';

import {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    Animated,
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
  render() {
      return (
        <View style={styles.pageContainer}>
          <View style={styles.fullScreen}>
            <Video style={[styles.fullScreen, styles.videoStyle]}
                key='ed.mp4'
                source={{uri: "ed"}}
                 rate={1.0}
                 volume={1.0}
                 muted={false}
                 paused={false}
                 resizeMode="cover"
                 repeat={false}
                  />
            </View>
        </View>
          // <Video
          //     key='ed.mp4'
          //     source={{uri: "ed"}}
          //      rate={1.0}
          //      volume={1.0}
          //      muted={false}
          //      paused={false}
          //      resizeMode="cover"
          //      repeat={false}
          //      style={styles.backgroundVideo} />
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
