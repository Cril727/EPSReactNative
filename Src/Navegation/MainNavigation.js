import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons'; import { Home } from '../../screens/pacientes/home';
import MainStack from './Stack/MainStack';
import { CitasStack } from './Stack/CitasStack';


const Tab = createBottomTabNavigator();



export default function MainNavegation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0F172A', // azul oscuro bonito
          borderTopWidth: 1,
          borderTopColor: '#1E293B',
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#38BDF8', // celeste cuando está activo
        tabBarInactiveTintColor: '#94A3B8', // gris cuando está inactivo
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="MainStack" 
        component={MainStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="citasStack"
        component={CitasStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}
