import React, {useState} from 'react'
import { StyleSheet,  View, Text,  TextInput, ScrollView, TouchableOpacity } from 'react-native';

function Login({route, navigation}) {

  const [username, setUsername] = useState(route.params.username);
  const [password, setPassword] = useState(route.params.password);

  
  const stack = route.params.stack
  
  const handlelogin =() =>
  {
    if(username!=='' && password!=='')
    {
      navigation.navigate('Home', {
        username: username,
      });
    }
    else{
      console.log('incomplete');
    }
  }

  const handlesignup =() =>
  {
    if(stack ==='')
    {
      navigation.navigate('Signup',
          {
            stack: 'login'
          })
    }
    else
    {
      navigation.goBack({stack:''})
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <View style={styles.container}>

      <Text>Login</Text>

      <View style={styles.form}>
        <TextInput style={styles.inputstyle} defaultValue={username} onChangeText={(e)=> setUsername(e)} placeholder='Username'/>
        <TextInput secureTextEntry={true} style={styles.inputstyle} defaultValue={password} onChangeText={(e)=> setPassword(e)} placeholder='Password'/>

        <View style={styles.touchopcontainer}>
          <TouchableOpacity  onPress={() => handlelogin()}>
            <Text style={styles.touchableopText}>Login</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.touchopcontainer2}>
          
          <TouchableOpacity  onPress={() => handlesignup()}>
            <Text style={styles.touchableopText}>New User? Sign Up</Text>
          </TouchableOpacity>
          
        </View>

      </View>

    </View>
    </ScrollView>
  )
}

export default Login



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
      backgroundColor: '#1826c4',
      marginTop:70,
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
