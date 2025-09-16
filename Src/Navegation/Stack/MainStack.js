import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../screens/pacientes/home';
// Si luego creas el Perfil, lo importas aquí
// import Perfil from '../../../screens/pacientes/perfil';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Inicio' }}   // 👈 Aquí aparece la barra con el título
      />
      {/* Si agregas más pantallas, también puedes personalizar sus títulos */}
      {/* 
      <Stack.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{ title: 'Mi Perfil' }} 
      /> 
      */}
    </Stack.Navigator>
  );
}
