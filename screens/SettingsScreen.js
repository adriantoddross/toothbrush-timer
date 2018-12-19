import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };
  
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '0'
    };
    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer(e) {
    this.setState({
      minutes: e
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.layout}>
          <TimerInput userInput={this.state.minutes} handleTimer={this.handleTimer}/>
          <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
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
          {this.props.minutes}:{this.props.seconds}
        </Text>
      </View>
    );
  }
}

class TimerInput extends React.Component {
  render() {
    return(
      <View>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          onChangeText = {(e) => this.props.handleTimer(e)}
          value={this.props.userInput}
          maxLength={9}  //setting limit of input
        />
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