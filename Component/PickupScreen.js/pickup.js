import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default function Pickup ({navigation}) {
    return (
      <View style={{ flex: 1, backgroundColor: "#444" }}>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
            style={{
              borderWidth: 1,
              height: 54,
              width: 200,
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                style={{
                  backgroundColor: "#666",
                  width: 60,
                  color: "black",
                  fontSize: 18,
                  paddingLeft: 35,
                  fontWeight: "bold",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                4
              </Text>
              <Text
                style={{
                  backgroundColor: "#028bc7",
                  width: 60,
                  color: "white",
                  fontSize: 18,
                  paddingLeft: 30,
                  fontWeight: "bold",
                }}
              >
                15
              </Text>
            </View>

            <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 35 }}>
              배차
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("Home")}

            style={{
              borderWidth: 1,
              flex: 1,
              height: 54,
              marginLeft: 5,
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 35 }}>
              취소 :{" "}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 10 }}> 10 </Text>
          </TouchableOpacity>
        </View>
        

        <View style={{height:40,backgroundColor:'#424662',alignItems:'center'}}>
           <Text style={{fontSize:24,color:'white'}}> 콜 상세 정보 </Text>
        </View>
         
         {/* text */}
        <View style={{marginTop:4}}>
            <View style={{flexDirection:'row',marginRight:10}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>상점명</Text>
                <Text style={{fontSize:20,paddingLeft:10,color:'white'}}>바로덥밥 1층</Text>
            </View>


            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>상점전화</Text>
                <TouchableOpacity>
                <Text style={{fontSize:20,color:'white',borderBottomWidth:1,borderColor:'white',marginLeft:5}}> 010 1234 5678</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>고객전화</Text>
                <TouchableOpacity>
                <Text style={{fontSize:20,color:'white',borderBottomWidth:1,borderColor:'white',marginLeft:5}}> 010 4321 4321</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>관리전화</Text>
                <TouchableOpacity>
                <Text style={{fontSize:20,color:'white',borderBottomWidth:1,borderColor:'white',marginLeft:5}}> 010 2500 0935</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>출발지</Text>
                <TouchableOpacity>
                <Text style={{fontSize:20,color:'white',marginLeft:5,marginRight:10}}> [어은동] 어은동 111-1 <Text style={{fontWeight:'bold'}}>( 바로덥밥 )</Text></Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>도착지</Text>
                <TouchableOpacity>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:5,marginRight:10}}> [봉명동] 봉명동 556-17 가유</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>배달비</Text>
                <Text style={{fontSize:20,width:80,paddingLeft:5,color:'orange'}}>4300</Text>

                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>할증</Text>
                <Text style={{fontSize:20,width:80,paddingLeft:5,color:'orange'}}>500</Text>

            </View>

            <View style={{flexDirection:'row',marginRight:10,marginTop:4}}>
                <Text style={{backgroundColor:'#777',fontSize:20,width:90,paddingLeft:5}}>결제방법</Text>
                <TouchableOpacity>
                <Text style={{fontSize:20,color:'red',marginLeft:5,marginRight:10}}> 카드결제 </Text>
                </TouchableOpacity>
            </View>
        
        </View>




      </View>
    );
  }

const styles = StyleSheet.create({});
