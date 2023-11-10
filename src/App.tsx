// In App.js or your main entry point
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';
import TermsScreen from './screens/TermsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Terms">
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="InitScreen" component={InitialScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;