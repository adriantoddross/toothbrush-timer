import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Timer/>
        <StartButton/>
      </View>
    </View>
    );
    
  }
}

  class Timer extends React.Component {
    render() {
      return(
        <View>
          <Text>
            Clock time goes here.
          </Text>
        </View>
      );
    }
  }

  class StartButton extends React.Component {
    render() {
      return(
        <View>
          <Button
            title="Start"
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});