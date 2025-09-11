import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import InicioScreen from "../screens/InicioScreen";
import PerfilStack from "../navigation/PerfilStack";

const Tab = createBottomTabNavigator();
import MainStack from './Stack/MainStack';

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
        name="Inicio" 
        component={InicioScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStack}
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
