import { StyleSheet,  Pressable, Text } from 'react-native';
import Splash from './components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator  initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ title: 'Splash', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup', headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{
          gestureEnabled: false,
          headerBackVisible:false, 
        headerRight: () => (
              
              <Pressable style={styles.button} onPress={() => alert('go to profile')}>
                <Text style={styles.text}>profile</Text>
              </Pressable>
            ), 
            title: 'GardenEasy',  headerStyle: { backgroundColor: '#32a852', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', }, }}/>

      </Stack.Navigator>


    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:
  {
    color: '#fff',
    fontSize: 16
  }
});
