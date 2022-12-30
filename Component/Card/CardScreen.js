import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
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

      <TouchableOpacity>
        <View
          style={{
            height: 30,
            backgroundColor: "#444",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 4, marginLeft: 10 }}>
            <Text style={{ color: "white", marginRight: 10 }}>
              베달대행(14,400)
            </Text>
            <Text style={{ color: "white" }}>10분</Text>
          </View>

          <View style={{ flexDirection: "row", marginRight: 10, marginTop: 4 }}>
            <Text style={{ color: "white", marginRight: 10 }}>0분</Text>
            <FontAwesome name="credit-card" size={16} color="red" />
            <Text style={{ color: "yellow", marginLeft: 10 }}>10.300원</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#028bc7" }}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                marginRight: 10,
                width: 45,
              }}
            >
              100m
            </Text>
            <Entypo name="arrow-right" size={24} color="#5bc4e7" />
            <Text
              style={{
                color: "white",
                marginRight: 10,
                marginLeft: 10,
                flex: 1,
              }}
            >
              [어은동] 바로덥밥 1층
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                marginRight: 10,
                width: 45,
              }}
            >
              5k
            </Text>
            <Entypo name="arrow-right" size={24} color="orange" />
            <Text
              style={{
                color: "white",
                marginRight: 10,
                marginLeft: 10,
                flex: 1,
              }}
            >
              [봉명동] 유성구 봉명동 556-17 가유
            </Text>
          </View>

          <View style={{ backgroundColor: "#444" }}>
            <Text
              style={{
                marginTop: 4,
                marginBottom: 4,
                marginLeft: 10,
                marginRight: 10,
                color: "yellow",
              }}
            >
              안전하게와주세요{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
