'use strict';

import React from 'react-native';
import Video from 'react-native-video';

import {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    View
  } from 'react-native';

var styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

class MyVideo extends Component {
  render() {
      return (
        <View></View>
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
