/**
 * Created by huayunanyan on 2016/12/6.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Cell extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.cell} >
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

    
    
const styles = StyleSheet.create({
  cell: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
