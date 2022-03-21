import React, {useState} from 'react'
import { StyleSheet,  View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

function Signup({route, navigation}) {

const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confpassword, setconfPassword] = useState('');

const stack = route.params.stack

const handleSignup =() =>
  {
    if(name!=='' && username!=='' && password!=='' && confpassword!=='')
    {
      navigation.navigate('Login', {
        username: username,
        password: password,
      });
    }
    else{
      console.log('incomplete');
    }
  }


  const handlelogin = () =>
  {
    if(stack==='')
    {
      navigation.navigate('Login', {
        username: '',
        password: '',
        stack:'signup'
      })
    }
    else
    {
      navigation.goBack( {
        username: '',
        password: '',
        stack:''
      })
    }
  }


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <View style={styles.container}>

      <Text>Signup</Text>

      <View style={styles.form}>
        <TextInput style={styles.inputstyle} onChangeText={(e)=> setName(e)} placeholder='Full Name'/>
        <TextInput style={styles.inputstyle} onChangeText={(e)=> setUsername(e)} placeholder='Username'/>
        <TextInput secureTextEntry={true} style={styles.inputstyle} onChangeText={(e)=> setPassword(e)} placeholder='Password'/>
        <TextInput secureTextEntry={true} style={styles.inputstyle} onChangeText={(e)=> setconfPassword(e)} placeholder='Confirm Password'/>

        <View style={styles.touchopcontainer}>
          <TouchableOpacity color='#fff' onPress={() => handleSignup()}>
            <Text style={styles.touchableopText}>Signup</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.touchopcontainer2}>
          <TouchableOpacity  color='#fff' onPress={() => handlelogin()}>
            <Text style={styles.touchableopText}>Already a User? Login</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
    </ScrollView>
  )
}

export default Signup



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
      backgroundColor: '#1826c4',
      marginTop:40,
      borderRadius:5, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10
         
  
    },
  
    touchopcontainer2:
    {
      backgroundColor: '#66d466',
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
    }
    
  });
  


