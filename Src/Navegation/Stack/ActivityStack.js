import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Citas from '../../../screens/pacientes/Citas';
import Consultas from '../../../screens/pacientes/Consultorios';

const Stack = createNativeStackNavigator();

export default function ActivityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Actividad" component={Citas} options={{ title: 'Actividades' }} />
      <Stack.Screen name="Consultas" component={Consultas} options={{ title: 'Consultas' }} />
    </Stack.Navigator>
  );
}
