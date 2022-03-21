import React from 'react'
import { StyleSheet,  View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import plantsplash from '../assets/plantsplash.jpg'

function Splash({navigation}) {


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <View style={styles.container}>

      <Image source={plantsplash} style={{ height: 300 }}
      resizeMode="contain"/>


      <View style={styles.form}>
        
        <View style={styles.touchopcontainer}>
          <TouchableOpacity  onPress={() => navigation.navigate('Login', {
            username: '',
            password: '',
            stack: ''
          })}>
            <Text style={styles.touchableopText}>Already a member? Just Login</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.touchopcontainer2}>
          <TouchableOpacity  onPress={() => navigation.navigate('Signup',
          {
            stack: ''
          })}>
            <Text style={styles.signuptext}>New User? Sign Up</Text>
          </TouchableOpacity>
        </View>
          

      </View>

    </View>
    </ScrollView>
  )
}

export default Splash



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form:
  {
    width:'80%',
  },
  inputstyle:
  {
    backgroundColor:'white',
    borderRadius:8,
    borderColor:'#1d9110',
    borderWidth:1,
    height:40,
    paddingStart: 5,
    marginBottom:5,
  },

  touchopcontainer:
  {
      backgroundColor: '#66d466',
      marginTop:40,
      borderRadius:5, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10
  },

  touchopcontainer2:
  {
      backgroundColor: '#fff',
      marginTop:40,
      borderRadius:5, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10
  },

 
  touchableopText:
  {
    color: '#fff',
    fontSize: 16
  },

  signuptext:
  {
    color: '#1b33bf',
    fontSize: 16
  }
  
});
