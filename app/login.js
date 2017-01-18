/**
 * Created by huayunanyan on 2016/11/29.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

import Main from './main';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ITCode: 'wanjiang',
      password: 'WSWJ123.',
      ITCodeEditable: true,
      passwordEditable: true
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={[styles.txtInput, {marginTop:104}]}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   placeholder={'ITCode'}
                   editable={this.state.ITCodeEditable}
                   defaultValue={'wanjiang'}
                   onChangeText={(text) => this.setState({ITCode:text})}/>
        <TextInput style={[styles.txtInput, {marginTop:20}]}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   placeholder={'请输入密码'}
                   secureTextEntry={true}
                   editable={this.state.passwordEditable}
                   defaultValue={'WSWJ123.'}
                   onChangeText={(text) => this.setState({password:text})}/>
        <TouchableHighlight style={styles.loginBtnOnTouch}
                            activeOpacity={0.7}
                            underlayColor={"#B22222"}
                            onPress={this._login.bind(this)}>
          <Text style={styles.loginBtn}>登  录</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _login() {
    let ITCode = this.state.ITCode;
    let password = this.state.password;

    if (ITCode.length == 0){
      Prompt.promptText('ITCode不能为空');
      return;
    }

    if (password.length == 0){
      Prompt.promptText('密码不能为空');
      return;
    }
    const {navigator} = this.props;
    navigator.push({
      name: '首页',
      title: '',
      component: Main
    });
    /*
    this._logining(true);

    //发送登录请求
    fetch('http://dws.nnwg121.com/Engineer/api/Login/Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        UserID: ITCode,
        Pwd: password
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.Flag == true) {
          const {navigator} = this.props;
          navigator.push({
            name: '首页',
            title: '',
            component: Main
          });
        } else {
          Prompt.promptText(responseJson.Message);
        }
        this._logining(false);
      })
      .catch((error) => {
        console.error(error);
        this._logining(false);
        Prompt.promptText('登录失败,请检查网络');
      });
      */
  }

  //是否正在登录中
  _logining(login) {
      this.setState({
        ITCodeEditable: !login,
        passwordEditable: !login
      });

      global.loadingIndicator.show(login);
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    // alignItems: 'stretch'
  },

  txtInput: {
    marginHorizontal: 20,
    height: 26
  },
  loginBtn: {
    backgroundColor: "#F22D3C",
    color: "white",
    fontSize: 17,
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 8,
    overflow: 'hidden'
  },
  loginBtnOnTouch: {
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 60
  }
});