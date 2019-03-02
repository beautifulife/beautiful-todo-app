import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.circle} />
        </TouchableOpacity>
        <Text style={styles.text}>I'm todo</Text>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 80,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    marginVertical: 30,
    fontSize: 20,
    fontWeight: '600'
  },
  circle: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'red'
  }
});
