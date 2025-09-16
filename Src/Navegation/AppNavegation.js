import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavegation from './MainNavigation';
import AuthNavegation from './AuthNavegation';
// import AuthNavegation from './AuthNavegation'; // cuando tengas auth real

export default function AppNavegation() {
  const isLoggedIn = true; // TODO: cámbialo según tu estado real
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavegation /> : <AuthNavegation />}
    </NavigationContainer>
  );
}
