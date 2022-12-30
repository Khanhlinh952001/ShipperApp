import { Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';


export default function Perfect({navigation}) {
    return (
      <View style={styles.view}>
         <View
        style={{
          borderBottomWidth: 1,
          borderColor: "blue",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 4,
          paddingTop: 4,
        }}
      >
        <View />
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            style={{ marginLeft: 20 }}
            name="money"
            size={20}
            color="black"
          />
          <Text> 총 </Text>
          <Text style={{ fontWeight: "bold", marginRight: 20 }}>
            10.300 원{" "}
          </Text>
        </View>
      </View>


         <TouchableOpacity 
         onPress={()=>navigation.navigate("pickuped")}
         >
          <View style={styles.body_head}>
             <View style={styles.body_head1}>
                 <Text style={styles.body_head1_text1} >베달대행(14,400)</Text>
                 <Text style={styles.body_head1_text2}>10분</Text>
             </View>

             <View style={styles.body_body}>
              <Text style={styles.body_body_text1}>0분</Text>
              <FontAwesome name="credit-card" size={16} color="red" />
              <Text style={styles.body_body_text2}>10.300원</Text>
             </View>
          </View>

          <View style={styles.body_body2}>
            <View style={styles.body_body2_view}>
               <Text style={styles.body_body2_view_text}>100m</Text>
               <Entypo name="arrow-right" size={24} color="#5bc4e7" />
               <Text style={styles.body_body2_view_text1}>[어은동] 바로덥밥 1층</Text>
            </View>

            <View style={styles.body_body21}>
               <Text style={styles.body_body2_view_text}>5k</Text>
               <Entypo name="arrow-right" size={24} color="orange" />
               <Text style={styles.body_body2_view_text1}>[봉명동] 유성구 봉명동 556-17 가유</Text>
            </View>

            <View style={styles.footer}>
               <Text style={styles.footer_text}>안전하게와주세요 </Text>
            </View>

          </View>
         </TouchableOpacity>
      </View>
    )
  }
