import React from "react";

// Sayfalar arası geçişi yönetecek, hangi sayfada olduğumu tutacak yapı
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./Pages/Welcome";
import MemberSign from "./Pages/MemberSign";
import MemberResult from "./Pages/MemberResult";


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="WelcomeScreen" component={Welcome}/>
                <Stack.Screen name="MemberSignScreen" component={MemberSign}/>
                <Stack.Screen name="MemberResultScreen" component={MemberResult}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;