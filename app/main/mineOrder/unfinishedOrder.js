/**
 * Created by huayunanyan on 2016/12/9.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView,
  RefreshControl
} from 'react-native';

export default class UnfinishedOrder extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    var arr = [];
    for(i = 0;i < 20;i++){
      arr.push('工单' + i);
    }

    this.state = {
      dataSource: ds.cloneWithRows(arr),
      refreshing: false
    }
  }

  render() {
    return (
      <ListView style={this.props.style}
                // tabLabel={this.props.tabLabel}
                dataSource={this.state.dataSource}
                renderRow=
                  {(rowData) =>
                      <Text style={styles.textCell}>
                        {rowData}
                      </Text>}
                refreshControl=
                  {<RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                      tintColor="#F22D3C"
                      title="Loading..."
                      titleColor="#F22D3C"
                      progressBackgroundColor="#ffff00"
                   />}
      />
    );
  }

  _onRefresh() {
    this.setState({
      refreshing: true
    });
    alert('下拉刷新');
  }
}


const styles = StyleSheet.create({
  textCell: {
    // backgroundColor:'blue',
    textAlign:'center',
    height: 80,
    margin: 8,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  }
});