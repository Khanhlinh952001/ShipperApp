import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Component/Home/HomeScreen.js";
import Perfect from "./Component/Perfect/Perfect.js";
import Danggiao from "./Component/DangGiao/Danggiao.js";
import Pickup from "./Component/PickupScreen.js/pickup.js";
import Pickuped from "./Component/pickuped/pickuped.js";
import Card from "./Component/Card/CardScreen.js";
import WaitScreen from "./Component/Wait/WaitScreen.js";
import Chat from "./Component/Chatting/Chat.js";
import { styles } from "./styles.js";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeTabs({navigation}) {
  return (
    <>
      <View style={styles.head}>
        <View style={styles.head1}>
          <View style={styles.head3}>
            <TouchableOpacity>
              <FontAwesome name="list" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome name="map-marker" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <FontAwesome name="wechat" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.head4}>VgoShipper</Text>
          <Text style={styles.head5}>총합 : 10.000 원</Text>
        </View>
      </View>

      <Tab.Navigator
        style={{ paddingTop: 10, backgroundColor: "black" }}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "black",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "list-alt" : "list-alt";
            } else if (route.name === "hoanthanh") {
              iconName = focused ? "clock-o" : "clock-o";
            } else if (route.name === "danggiao") {
              iconName = focused ? "clock-o" : "clock-o";
            } else if (route.name === "wait") {
              iconName = focused ? "cart-arrow-down" : "cart-arrow-down";
            } else if (route.name === "Card") {
              iconName = focused ? "credit-card" : "credit-card";
            }

            // You can return any component that you like here!

            return <FontAwesome name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "신규",
            tabBarBadge: () => {
              return (
                <Text
                  style={{
                    color: "white",
                    marginRight: 15,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: -7,
                  }}
                >
                  7
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="danggiao"
          component={Danggiao}
          options={{
            title: "배차",
            tabBarBadge: () => {
              return (
                <Text
                  style={{
                    color: "white",
                    marginRight: 15,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: -7,
                  }}
                >
                  1
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="hoanthanh"
          component={Perfect}
          options={{
            title: "완료",
            tabBarBadge: () => {
              return (
                <Text
                  style={{
                    color: "white",
                    marginRight: 15,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: -7,
                  }}
                >
                  1
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Card"
          component={Card}
          options={{
            title: "카드",
            tabBarBadge: () => {
              return (
                <Text
                  style={{
                    color: "white",
                    marginRight: 15,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: -7,
                  }}
                >
                  1
                </Text>
              );
            },
          }}
        />

        <Tab.Screen
          name="wait"
          component={WaitScreen}
          options={{
            title: "대기",
            tabBarBadge: () => {
              return (
                <Text
                  style={{
                    color: "white",
                    marginRight: 15,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: -7,
                  }}
                >
                  100
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShow: false }}>
        <Stack.Screen
          name="HomeStack"
          component={HomeTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="pickup"
          component={Pickup}
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ }}
        /> 

        <Stack.Screen
          name="pickuped"
          component={Pickuped}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
