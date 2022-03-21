import React, { useEffect } from 'react'
import { StyleSheet, BackHandler, View,  Text,  } from 'react-native';

import { Permissions, Contacts } from 'expo';

function Home({route, navigation}) {
    /*  Get the param */
  const { username } = route.params;


  function handleBackButtonClick() {
    BackHandler.exitApp()
    return true;
  }

  useEffect(() => {
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
  