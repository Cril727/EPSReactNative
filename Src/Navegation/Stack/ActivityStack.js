import { createStackNavigator} from "@react-navigation/native";
import ListarActividad from "../../../screens/pacientes/citas";
import Consultas from "../../../screens/pacientes/consultas";



const Stack = createStackNavigator();

export default function StackActivity(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="ListarActividad"
                component={ListarActividad}
                options={{tittle : "Actividades"}}

             />   

             <Stack.Screen
                name="Consultas"
                component={Consultas}
                options={{tittle : "Consultas"}}

             />       
        </Stack.Navigator>
    )
}