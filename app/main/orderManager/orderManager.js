/**
 * Created by huayunanyan on 2016/12/8.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class MineOrder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableTabView
        style={{backgroundColor:'white'}}
        tabBarBackgroundColor={'#F22D3C'}
        tabBarUnderlineStyle={{backgroundColor: 'white'}}
        tabBarActiveTextColor={'white'}
        tabBarInactiveTextColor={'white'}
        tabBarTextStyle={{fontSize:17}}
        contentProps={{bounces: false}}
        renderTabBar={() => <DefaultTabBar />}
      >
        <Text tabLabel='工单管理'>My</Text>
        <Text tabLabel='历史工单'>favorite</Text>
      </ScrollableTabView>
    );
  }
}