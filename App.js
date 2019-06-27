/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux'
import {View} from 'react-native'
import Mix from './Screen/Mix'
import GhabezZarime from "./Stack/GhabezZarime";
import KharidBasteEnternety from "./Stack/KharidBasteEnternety";
import KhadamatPardakhtBanky from "./Stack/KhadamatPardakhtBanky";

export default class App extends Component {
  render() {
    return (

      <Mix/>

    );
  }
}
;
