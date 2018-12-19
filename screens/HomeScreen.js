import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Toothbrush Timer',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.layout}>
          <Button
            title='Start brushing'
          />
          <Button
            title='About'
          />
        </View>
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
