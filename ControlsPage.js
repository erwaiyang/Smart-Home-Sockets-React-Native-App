'use strict';

import React from 'react-native';

import ControlsPanel from './components/ControlsPanel';

import {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    View
  } from 'react-native';

  var styles = StyleSheet.create({
      description: {
          fontSize: 20,
          backgroundColor: 'white'
      },
      container: {
          flex: 1
      }
  });
  const temp = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.description}>
            Featured Tab
          </Text>
      </View>
    );
  };
  class ControlsPage extends Component {

      render() {
            return (
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                title: '即時控制',
                component: ControlsPanel
            }}/>
          );
      }
  }

export default ControlsPage;
