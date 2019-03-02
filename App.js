import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  Platform
} from 'react-native';
import ToDo from './Todo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.setState({
      inputValue: text
    });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Beautiful To Do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="New To Do"
            placeholderTextColor="#999"
            value={inputValue}
            onChangeText={this.handleChange}
            returnKeyType="done"
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.todoContainer}>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    marginTop: height * 0.1,
    marginBottom: height * 0.05,
    fontSize: 30,
    fontWeight: '400',
    color: 'white'
  },
  card: {
    flex: 1,
    width: width - 50,
    borderRadius: 10,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 23
  },
  todoContainer: {
    alignItems: 'center'
  }
});
