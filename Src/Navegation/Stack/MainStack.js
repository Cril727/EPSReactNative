import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Citas from "./CitasStack";
import Doctores from "./DoctoresStack";
import Usuario from "./UsuariosStack";
import EspecialidadStack from "./EspecialidadStack";


const Stack = createNativeStackNavigator();

export default function MainStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{ headerShown: false}}
        />

         
            <Stack.Screen
            name="Usuario"
            component={Usuario}
            options={{ headerShown: false}}
        />     

        
            <Stack.Screen
            name="CitasFlow"
            component={Citas}
            options={{ headerShown: false}}
        />

            <Stack.Screen
            name="Doctores"
            component={Doctores}
            options={{ headerShown: false}}
        />

            <Stack.Screen
            name="Especialidades"
            component={EspecialidadStack}
            options={{ headerShown: false}}
        />
        </Stack.Navigator>
    )
}