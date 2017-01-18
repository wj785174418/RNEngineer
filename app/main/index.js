/**
 * Created by huayunanyan on 2016/12/7.
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

import OrderManager from './orderManager/orderManager';

import MineOrder from './mineOrder/mineOrder';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor:'#F22D3C',height:20}}/>
        <ScrollableTabView
          tabBarPosition={'bottom'}
          locked={true}
          tabBarUnderlineStyle={{height:0}}
          scrollWithoutAnimation={true}
          renderTabBar={() => <DefaultTabBar />}
        >
          <MineOrder tabLabel="我的工单"/>
          <OrderManager tabLabel="任务管理"/>
          <Text tabLabel='我的'
                onPress={() => this.props.navigator.pop()}
                style={{flex:1,backgroundColor:'blue'}}>
            project
          </Text>
        </ScrollableTabView>
      </View>
    )
  }
}

