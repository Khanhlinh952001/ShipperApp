import { Text, StyleSheet, View,TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <View style={{borderWidth:1,flex:1,margin:4}}>
        {/*phan dau  */}
        <View style={{height:50,borderWidth:1,flexDirection:"row",justifyContent:'space-between',backgroundColor:'green'}}>
            <View>
            <Text style={{fontSize:24,marginLeft:10,marginTop:5,fontWeight:'bold',color:"white"}}>Chat</Text>  
            </View>

            <View >
                <TouchableOpacity>
             <Text style={{fontSize:32,fontWeight:'bold',marginRight:20,color:"white"}}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
        {/* phan tin nhan  */}
        <View style={{flex:1}}>

        </View>

        {/* phan nhap noi dung */}
        <View style={{height:40,marginBottom:20,borderRadius:10,flexDirection:"row"}}>
            <View style={{flex:1}}>
           <TextInput placeholder='     Hello' style={{flex:1,borderWidth:2,borderColor:"green",borderRadius:15,marginLeft:10,paddingLeft:10}} />
            </View>
            <TouchableOpacity>
                <View style={{marginLeft:10,borderWidth:1,backgroundColor:'green',borderRadius:40,height:40}}>
            <Text style={{fontSize:20,paddingLeft:20,paddingRight:20,color:'white',marginTop:4}}>Send</Text>
            </View>
            </TouchableOpacity>
           
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})