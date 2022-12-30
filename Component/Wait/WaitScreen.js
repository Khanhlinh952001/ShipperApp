import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class WaitScreen extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'
      }}>
      <Image style={{width:400,height:400}} source={require('../img/images.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})