/**
 * Created by huayunanyan on 2016/12/5.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

export default class LoadingIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      touchable: 'none'
    }
  }

  render() {
    return(
      <View style={styles.mask}
            pointerEvents={this.state.touchable}>
        <ActivityIndicator size={'large'} animating={this.state.loading} />
      </View>
    );
  }

  componentDidMount() {
    global.loadingIndicator = this;
    alert('全局loading');
  }


  show(show) {
    if (show) {
      this.setState({
        loading: true,
        touchable: 'auto'
      });
    } else {
      this.setState({
        loading: false,
        touchable: 'none'
      });
    }
  }
}

const styles = StyleSheet.create({
  mask: {
    position:'absolute',
    top: 64,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});