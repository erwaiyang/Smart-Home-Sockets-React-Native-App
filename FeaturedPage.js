'use strict';

import React from 'react-native';

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
  class FeaturedPage extends Component {

      render() {
            return (
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                title: 'Featured',
                component: temp
            }}/>
          );
      }
  }

export default FeaturedPage;
