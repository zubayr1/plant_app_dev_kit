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

    <Text style={styles.title}>Hello</Text>

    <Text  style={styles.desc}> Create your new account</Text>

      <View style={styles.form}>
        <TextInput style={styles.inputstyle} onChangeText={(e)=> setName(e)} placeholder='Full Name'/>
        <TextInput style={styles.inputstyle} onChangeText={(e)=> setUsername(e)} placeholder='Email Id'/>
        <TextInput secureTextEntry={true} style={styles.inputstyle} onChangeText={(e)=> setPassword(e)} placeholder='Password'/>
        <TextInput secureTextEntry={true} style={styles.inputstyle} onChangeText={(e)=> setconfPassword(e)} placeholder='Confirm Password'/>

        <View style={styles.touchopcontainer}>
          <TouchableOpacity color='#fff' onPress={() => handleSignup()}>
            <Text style={styles.touchableopText1}>Signup</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.touchopcontainer2}>
        <Text>
                  <Text style={styles.touchableopText3} >Already have an account? </Text>
                  <Text style={styles.touchableopText2}  onPress={() => navigation.navigate('Login',
                  {
                    stack: ''
                  })}>
                    Login
                  </Text>
            </Text>
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
      marginTop: 30
    },
    inputstyle:
    {
      backgroundColor:'white',
      borderRadius:24,
      borderColor:'#87c486',
      borderWidth:2,
      height:45,
      paddingStart: 20,
      marginBottom:10,
    },
  
    touchopcontainer:
    {
      backgroundColor: '#fff',
      marginTop:30,
      borderRadius:30, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10
         
  
    },
  
    touchopcontainer2:
    {
      backgroundColor: '#fff',
      marginTop:2,
      borderRadius:5,   
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10    
  
    },
    touchableopText3:
  {
    color: '#2c4a11',
    fontSize: 20
  },

    touchableopText1:
    {
     
    color: '#2c4a11',
    fontSize: 40
    },

    touchableopText2:
    {
      color: '#2c4a11',
      fontSize: 20,
      fontWeight: 'bold'
    },
    
  title:
  {
    fontSize: 42,
    color: '#2c4a11'
  },

  desc:
  {
    fontSize: 24,
    color: '#87c486'
  },
    
  });
  


