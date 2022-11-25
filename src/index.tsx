import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import 'cc';
import {ApplicationNavigator} from './navigators/application.navigator';

function AppComponent() {
  return (
    <NavigationContainer>
      <ApplicationNavigator />
    </NavigationContainer>
  );
}

export function App() {
  return <AppComponent />;
}
