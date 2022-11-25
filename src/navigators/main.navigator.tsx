import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, SafeAreaView, Text} from 'react-native';
import {MainScreen} from '../screens';

export type RootStackParamList = {
  HomeScreen: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Main') {
            return (
              // <Image
              //   style={[{tintColor: color, width: 24, height: 24}]}
              //   source={require('./images/home.png')}
              // />
              <Text>asdsa</Text>
            );
          }
          // else if (route.name === 'Profile') {
          //   return (
          //     <Image
          //       style={[{tintColor: color, width: 24, height: 24}]}
          //       source={require('./images/profile.png')}
          //     />
          //   );
          // } else if (route.name === 'Orders') {
          //   return (
          //     <Image
          //       style={[{tintColor: color, width: 24, height: 24}]}
          //       source={require('./images/orders.png')}
          //     />
          //   );
          // } else if (route.name === 'Categories') {
          //   return (
          //     <Image
          //       style={[{tintColor: color, width: 24, height: 24}]}
          //       source={require('./images/categories.png')}
          //     />
          //   );
          // }
          return null;
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{tabBarLabel: 'Anasayfa'}}
      />
    </Tab.Navigator>
  );
}

export const MainNavigator = memo(function ApplicationNavigator() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="HomeScreen" component={TabComponent} />
    </MainStack.Navigator>
  );
});
