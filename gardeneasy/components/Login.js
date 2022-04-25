import React, {useState} from 'react'
import { StyleSheet,  View, Text,  TextInput, ScrollView, TouchableOpacity,  } from 'react-native';

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

    <Text style={styles.title}>Welcome</Text>

    <Text  style={styles.desc}> Please log in to your account</Text>

      <View style={styles.form}>
        
        <TextInput selectionColor='green' style={styles.inputstyle} defaultValue={username} onChangeText={(e)=> setUsername(e)} placeholder='Email'/>

        <TextInput selectionColor='green' secureTextEntry={true} style={styles.inputstyle} defaultValue={password} onChangeText={(e)=> setPassword(e)} placeholder='Password'/>

        <View style={styles.touchopcontainer}>
          <TouchableOpacity  onPress={() => handlelogin()}>
            <Text style={styles.touchableopText1}>Log in</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.touchopcontainer2}>
          
          <TouchableOpacity  onPress={() => handlesignup()}>
            <Text>
                  <Text style={styles.touchableopText3} >Dont have an account? </Text>
                  <Text style={styles.touchableopText2}  onPress={() => navigation.navigate('Signup',
                  {
                    stack: ''
                  })}>
                    Sign Up
                  </Text>
            </Text>
          </TouchableOpacity>
          
        </View>

        <View
            style={{
              borderBottomColor: '#bdcca4',
              borderBottomWidth: 1,
            }}
          />
      </View>


      <View style={styles.logindiff}>
        <Text style={styles.touchableopText3}>Or Login With</Text>
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
    marginTop: 40,
    width:'80%',
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

  logindiff:
  {
    backgroundColor: '#fff',
    marginTop:10,
    borderRadius:5,   
   
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

  touchableopText3:
  {
    color: '#2c4a11',
    fontSize: 20
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
