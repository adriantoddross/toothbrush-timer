/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Vibration } from 'react-native';
import { Button } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };
  
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      active: false,
      message: 'Ready to brush?',
      seconds: '00',
      minutes: '0',
      quadrant: 1
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
      seconds: sec,
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
      
      this.setState({
        quadrant: this.state.quadrant + 1
      });

      if (this.state.quadrant < 5) {
        this.startCountDown();

        this.setState({
          message: 'Switch sides!',
        });

        setTimeout(() => {
          this.setState({message: ''});
        }, 2000);

      } else if (this.state.quadrant > 4) {
        clearInterval(this.intervalHandle);
        this.secondsRemaining = 0;

        this.setState({
          finished: true,
          message: 'Done! Good job.',
          quadrant: 1
        });

        Vibration.vibrate();

        setTimeout(() => {
          this.setState({
            message: 'Now would be a great time to floss!',
            active: false
          });
          Vibration.cancel();
        }, 2000);

      }
    }
    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = 5;

    this.setState({
      message: '',
      finished: false,
      active: true
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text 
            style={styles.message}>
            {this.state.message}
          </Text>
          <Timer 
            minutes={this.state.minutes} 
            seconds={this.state.seconds}/>
        </View>
        <View>
          {this.state.active ? null : 
            <StartButton style={styles.startbutton} startCountDown={this.startCountDown}/>}

        </View>
      </View>
    );
    
  }
}

class Timer extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.countdown}>
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
  timer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  message: {
    letterSpacing: 1.5,
    fontSize: 15,
    textTransform: 'uppercase'
  },
  countdown: {
    fontSize: 90,
  },
  startbutton: {
    alignSelf: 'flex-end'
  }
});