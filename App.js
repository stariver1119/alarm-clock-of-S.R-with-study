import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, ScrollView
} from 'react-native';
import Forecast from './Forecast';



class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few cloulds',
        temp: 45.7
      }
    }

  }
  _handleTextChange(event) {
    console.log(event.nativeEvent.text);
    this.setState({ zip: event.nativeEvent.text });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>
            You input {this.state.zip}.
        </Text>
          <Forecast main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp} />
          <TextInput
            style={styles.input}
            onSubmitEditing={(event) => this._handleTextChange(event)} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4D4D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default WeatherProject;