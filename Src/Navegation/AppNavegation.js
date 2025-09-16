import { NavigationContainer } from "@react-navigation/native";
import AuthNavegation from "./AuthNavegation";
import MainNavegation from "./MainNavigation";



export default function AppNavegation() {
    return (
        <NavigationContainer>
            <MainNavegation />
        </NavigationContainer>
    )
}