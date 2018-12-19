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

    this.secondsRemaining;
    this.intervalHandle;
    this.handleTimer = this.handleTimer.bind(this);

    this.startCountDown = this.startCountDown.bind(this);  // this method triggers the countdown
    this.tick = this.tick.bind(this);

  }

  handleTimer(text) {
    this.setState({
      minutes: text
    });
  }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - (min * 60);

    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: '0' + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: '0' + min
      });
    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    
    let time = this.state.minutes;

    this.secondsRemaining = time * 60;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.layout}>
          <TimerInput userInput={this.state.minutes} handleTimer={this.handleTimer}/>
          <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
          <StartButton startCountDown={this.startCountDown}/>
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
          onChangeText = {(text) => this.props.handleTimer(text)}
          value={this.props.userInput.toString()}
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
          onPress={this.props.startCountDown}
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