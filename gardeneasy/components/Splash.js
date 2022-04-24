import React from 'react';
import { StyleSheet,  View, Text, Image,  ScrollView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Login from './Login';

const slides = [
  {
    key: 'one',
    title: 'Welcome',
    text: 'Curated information on commonly home grown plants, with blogs, videos and multilingual support.',
    image: require('../assets/1.jpg'),
    // backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: '',
    text: 'Catered notifications on plant care like daily watering, sunlight needs and fertilisation.',
    image: require('../assets/2.jpg'),
    // backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: '',
    text: 'Chat with expert botanists around the world to grow your plant better!',
    image: require('../assets/3.jpg'),
    // backgroundColor: '#22bcb5',
  },
  {
    key: 'four',
    title: '',
    text: 'Plant identification through pictures. So, no more wasting hours to find your plant!',
    image: require('../assets/3.jpg'),
    // backgroundColor: '#22bcb5',
  },
  {
    key: 'five',
    title: '',
    text: 'Community support through FAQs, latest news and trends and social media engagement.',
    image: require('../assets/3.jpg'),
    // backgroundColor: '#22bcb5',
  }
];

export default class Splash extends React.Component {

  constructor(props){  
    super(props);  
    this.state = {
      showRealApp: false
    }  
    // this.handleEvent = this.handleEvent.bind(this);  
  } 

  
  _renderItem = ({ item }) => {

    let buttonsview

    if(item.key==='one')
    {
      buttonsview = 
      <View style={styles.form}>
        
      <View style={styles.touchopcontainer}>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login', {
          username: '',
          password: '',
          stack: ''
        })}>
          <Text style={styles.touchableopText}>Already a member? Just Login</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.touchopcontainer2}>
        <Text>
          <Text>New User? </Text>
          <Text style={{fontWeight: "bold"}}  onPress={() => this.props.navigation.navigate('Signup',
          {
            stack: ''
          })}>
            Sign Up
          </Text>
        </Text>
      </View>
        

    </View>
    }
    else if(item.key==='five')
    {
      buttonsview = 
      <View style={styles.form}>
        
      <View style={styles.touchopcontainer}>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login', {
          username: '',
          password: '',
          stack: ''
        })}>
          <Text style={styles.touchableopText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>

    </View>
    }
    else
    {
      buttonsview = <View></View>
    }
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <View style={styles.container}>


      <Image source={item.image}     style={styles.imagescale} />
    
      <Text style={styles.title}>{item.title}</Text>


      <Text>{item.text}</Text>

     {buttonsview}

    </View>
    </ScrollView>
    );
  }
  


  render() {
    if (this.state.showRealApp) {
      this.props.navigation.navigate('Login', {
        username: '',
        password: '',
        stack: ''
      })
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={() => this.props.navigation.navigate('Login', {
        username: '',
        password: '',
        stack: ''
      })} onSkip={() => this.props.navigation.navigate('Login', {
        username: '',
        password: '',
        stack: ''
      })} showSkipButton='true'/>;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfcca4',
    alignItems: 'center',
  },

  title:
  {
    fontSize: 32,
    // fontFamily: 'Roboto'
  },
  
  imagescale: {
    width: '100%',
    height: '60%',
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
      backgroundColor: '#2f3134',
      marginTop:20,
      borderRadius:30, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10
  },

  touchopcontainer2:
  {
      
      marginTop:20,
      borderRadius:5, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
  },

 
  touchableopText:
  {
    color: '#bfcca4',
    fontSize: 16
  },

  signuptext:
  {
    color: '#1b33bf',
    fontSize: 16
  }
  
});
