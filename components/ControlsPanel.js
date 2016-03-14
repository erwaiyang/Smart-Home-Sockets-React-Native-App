import React from 'react-native';
import { Component, Switch, Text, View } from 'react-native';
import * as MY_KEYS from '../constants/keys';

var styles = {
  container : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchView : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  }
};

const URL = 'https://api.mediatek.com/mcs/v2/devices/' + MY_KEYS.DEVICE_ID + '/datapoints';

class ControlsPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      stoveSwitch: true,
      lightSwitch: true,
    };
  }

  _stoveChangeOnline (value) {
    this.setState({stoveSwitch: value});
    var myValue = (value)? 1:0;
    var myBody = JSON.stringify(
      //{
      //data:
        {
        datapoints: [{dataChnId: "stove", values: {value: myValue}}]
        }
      //}
    );
    console.log(myBody);
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'deviceKey': '5fRE7EYB00sfLpTZ'
      },
      body: myBody
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  _lightChangeOnline (value) {
    this.setState({lightSwitch: value});
    var myValue = (value)? 1:0;
    var myBody = JSON.stringify(
      //{
      //data:
        {
        datapoints: [{dataChnId: "kitchen_light", values: {value: myValue}}]
        }
      //}
    );
    console.log(myBody);
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'deviceKey': '5fRE7EYB00sfLpTZ'
      },
      body: myBody
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.switchView}>
          <Text>Stove:</Text>
          <Switch
            onValueChange={(value) => this._stoveChangeOnline(value)}
            style={{marginBottom: 10}}
            value={this.state.stoveSwitch} />
        </View>
        <View style={styles.switchView}>
          <Text>Light:</Text>
          <Switch
            onValueChange={(value) => this._lightChangeOnline(value)}
            style={{marginBottom: 10}}
            value={this.state.lightSwitch} />
        </View>
      </View>
    );
  }
}

export default ControlsPanel;
