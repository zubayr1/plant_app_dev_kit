import React, { useState, useEffect } from 'react'
import { StyleSheet, BackHandler, View,  Text,  } from 'react-native';
// import { Platform } from 'react-native';
import * as LocationPicker from 'expo-location'

function Home({route, navigation}) {
    /*  Get the param */
  const { username } = route.params;

  const [location,setLocation] = useState('')


  function handleBackButtonClick() {
    BackHandler.exitApp()
    return true;
  }

  useEffect(() => {
    (async() => {
     
        const {status} = await LocationPicker.requestForegroundPermissionsAsync();

        let loc = await LocationPicker.getCurrentPositionAsync({});
        setLocation(loc);

        console.log(loc);

        if(status!== 'granted')
        {
          alert('Sorry, Request not granted')
        }
    })();
    
  }, []);

  useEffect(() => {

    // Permission.checkPermission(PERMISSION_TYPE.location)


    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  return (
    <View style={styles.container}>
        <Text>
            Home
        </Text>

        <Text>
            Welcome {username}
        </Text>

        {/* <Text>
            {location}
        </Text> */}
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    
    
  });
  