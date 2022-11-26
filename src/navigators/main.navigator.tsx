import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Styles} from './style';
import {MainScreen} from '../screens/MainScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {ParamListBase, TabNavigationState} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {promotionId: number};
};

const MainStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MyTabBar({state}: {state: TabNavigationState<ParamListBase>}) {
  return (
    <View style={Styles.tabBarContainer}>
      {state.routes.map(route => {
        return (
          <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
            {route.name === 'Main' ? (
              <Image
                source={require('./images/PORTAL.png')}
                style={Styles.mainScreenIcon}
              />
            ) : route.name === 'Discover' ? (
              <>
                <Image
                  source={require('./images/discover.png')}
                  style={Styles.tabBarIcon}
                />
                <Text style={Styles.tabBarLabel}>KEŞFET</Text>
              </>
            ) : route.name === 'DahaDaha' ? (
              <>
                <Image
                  source={require('./images/Katıldıklarım.png')}
                  style={Styles.tabBarIcon}
                />
                <Text style={Styles.tabBarLabel}>PROFİL</Text>
              </>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabComponent() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Discover" component={MainScreen} />
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="DahaDaha" component={MainScreen} />
    </Tab.Navigator>
  );
}

export const MainNavigator = memo(function ApplicationNavigator() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="HomeScreen" component={TabComponent} />
      <MainStack.Screen name="DetailScreen" component={DetailScreen} />
    </MainStack.Navigator>
  );
});
