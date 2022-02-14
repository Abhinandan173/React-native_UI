import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import { COLORS } from './screens/colors';
import CreateAccount from './screens/createAccount';
import OtpScreen from './screens/otpScreen';
import ChangePassword from './screens/changePassword';
import ForgotPassword from './screens/forgotPassword';

const Stack = createStackNavigator();

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

  render(){
    return(
    <NavigationContainer >
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: COLORS.black
        }
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="CreateAccount" component={CreateAccount} /> */}
      {/* <Stack.Screen name="OtpScreen" component={OtpScreen} /> */}
      {/* <Stack.Screen name="ChangePassword" component={ChangePassword} /> */}
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
    </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlack,
  },
});
