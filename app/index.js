/**
 * Created by huayunanyan on 2016/11/29.
 */

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./login";

import {
  ScreenWidth,
  ScreenHeight
} from "./macro"

import LoadingIndicator from "./customComponent/loadingIndicator";

var NavigationBarRouteMapper = {

  LeftButton: function (route, navigator, index, navState) {
    // console.log(navigator.state.routeStack);
    // console.log(index);
    if (index != 0) {
      return null;
     
      // <TouchableHighlight activeOpacity={0.5} underlayColor={'#F22D3C'}
      //                     onPress={() => navigator.pop()} >
      //   <Text style={[styles.navBarTitle, styles.navBarLeftBtn]} >
      //     返回
      //   </Text>
      // </TouchableHighlight>
    }
  },

  RightButton: function (route, navigator, index, navState) {
    return null;
  },

  Title: function (route, navigator, index, navState) {
    return (
      <Text style={styles.navBarTitle}>
        {route.title}
      </Text>
    );
  }
};

class RNEngineer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hiddenNavigationBar: false
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content"/>
        <Navigator
          initialRoute={{name: '登录', title: "登录", component: Login}}
          onWillFocus={this._navWillSwitch.bind(this)}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
          }}
          navigationBar={<Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={(this.state.hiddenNavigationBar ? [styles.navBar,{height:0}]:styles.navBar)}
                        />}
        />
        <LoadingIndicator/>
      </View>
    );
  }

  _navWillSwitch(route) {
    if (route.name == '首页') {
      this.setState({
        hiddenNavigationBar: true
      });
    } else {
      this.setState({
        hiddenNavigationBar: false
      });
    }
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#F22D3C"
  },
  navBarTitle: {
    color: "white",
    marginTop: 14,
    fontSize: 16
  },
  navBarLeftBtn: {
    marginLeft: 20
  }
});

export default RNEngineer;