/**
 * Created by huayunanyan on 2016/12/2.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import Cell from './ListViewCell';

export default class Main extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var arr = [];
    for (i = 0; i < 20; i++) {
      arr.push('row' + i);
    }

    this.state = {
      dataSource: ds.cloneWithRows(arr)
    }
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        initialListSize={8}
        dataSource={this.state.dataSource}
        // renderSeparator={this._renderSeparator}
        renderRow={(rowData) => <Cell title={rowData}/>}
      />
    );
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 1,
          marginLeft: 8,
          backgroundColor: '#CCCCCC'
        }}
      />
    );
  }

}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white'
  }
});



