/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NativeModules
} from 'react-native';

import RNEngineer from "./app";

var prompt = NativeModules.WJPromptLabel;
global.Prompt = prompt;

AppRegistry.registerComponent('RNEngineer', () => RNEngineer);
