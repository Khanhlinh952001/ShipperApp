import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.head}>
        <Entypo style={styles.head_icon} name="bell" size={20} color="red" />
        <Text style={{ marginTop: 4 }}>안전운전하세요 </Text>
      </View>

      <ScrollView>
        {/* phan than  */}

        <TouchableOpacity
          style={styles.body}
          onPress={() => navigation.navigate("pickup")}
        >

          {/* phan dau cua don */}
          <View style={styles.body_left_head}>
            <View style={styles.body_head_text}>
              <Text style={styles.body_head_left_text1}>베달대행(14,400)</Text>
              <Text style={styles.body_head_left_text2}>10분</Text>
            </View>

            <View style={styles.body_right_head}>
              <Text style={styles.body_head_right_text1}>0분</Text>
              <Text style={styles.body_head_right_text2}> 카드 </Text>
              <Text style={styles.body_head_right_text3}>4.300원</Text>
            </View>
          </View>


       {/* phan than cua don */}
          <View style={styles.body_body_head}>
            <View style={styles.body_body1}>
              <Text style={styles.body_body1_text}>100m</Text>
              <Entypo name="arrow-right" size={24} color="#5bc4e7" />
              <Text style={styles.body_body1_text1}>[어은동] 바로덥밥 1층</Text>
            </View>

            <View style={styles.body_body1}>
              <Text style={styles.body_body1_text}>1.8k</Text>
              <Entypo name="arrow-right" size={24} color="orange" />
              <Text style={styles.body_body1_text1}>
                [봉명동] 유성구 봉명동 556-17 가유
              </Text>
            </View>
    
          {/* phan cuoi cua don */}
            <View style={styles.footer}>
              <Text style={styles.footer_text}>안전하게와주세요 </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 2 */}
      </ScrollView>
    </View>
  );
}
