import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, useColorScheme, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

function ListDetails() { //navigator for navigating between listScreen and DetailsScreen
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="ListScreen" component={ListScreen}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator> 
  )
}

function MapDetails() { //navigator for navigating between mapScreen and DetailsScreen
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator> 
  )
}

export default function App() { 

  const Tab = createBottomTabNavigator();

  /* const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === "dark"; */

  return ( // Bottom tab navigator used for navigating between the main screens (mapScreen and ListScreen)
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='MapScreen'
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              bottom: 30,
              left: 10,
              right: 10,
              backgroundColor: "white",
              borderTopColor: "white",
              position: "absolute",
              borderRadius: 15,
              height: 70,
              tabBarShowLabel: "true",
              paddingBottom: 0,
              ...styles.shadow,},
            null,
          ],
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "MapScreenTab") {
              iconName = focused ? "map" : "map-outline"
            } else if (route.name === "ListScreenTab") {
              iconName = focused ? "list" : "list-outline"
            }   
            return (
              <Ionicons
                name={iconName}
                size={30}
                color={"#659136"}
                style={styles.icon}
              />
            );
          }
        })}
      >
        <Tab.Screen name="MapScreenTab" component={MapDetails} />
        <Tab.Screen name="ListScreenTab" component={ListDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ //Provides all the styling for the page (In this case just the shadow effect for the bottom navigation bar)
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5
  }
});