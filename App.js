import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, ScrollView, registerCallableModule, Linking, } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './src/screens/login/login.js'
import register from './src/screens/register/register.js'

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'login' component = {login} options={{headerShown: false}}/>
        <Stack.Screen name = 'register' component = {register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}



