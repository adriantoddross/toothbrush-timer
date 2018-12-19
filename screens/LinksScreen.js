import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>
            Thanks for using Toothbrush Time! After pressing "Start brushing" and starting the timer, it will run for two minutes total, vibrating and signaling you every 30 seconds to brush the opposite side of your mouth. Don't forget to floss at least once a day, and always brush your teeth before bed!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
