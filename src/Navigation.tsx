import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from "./Screens/Home";
import WalletScreen from "./Screens/Wallet";
import PayScreen from "./Screens/Pay";
import PayButton from "./components/PayButton";

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  const Icons = {
    Home: {
      lib: AntDesign,
      name: "home",
    },
    Wallet: {
      lib: AntDesign,
      name: "creditcard",
    },
    Notifications: {
      lib: Ionicons,
      name: "ios-notifications-outline",
    },
    Settings: {
      lib: AntDesign,
      name: "setting",
    },
  } as any;

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay"){
            return(
              <PayButton onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            ); 
          } 
          const { lib: Icon, name } = Icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: "",
        }}
      />

      {/* screen Notifications and settings dont will exist */}
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: "Notificações",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
