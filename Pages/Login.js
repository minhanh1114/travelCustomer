import React, { useEffect, useState } from 'react'
import {Image, ImageBackground,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Load from '../Load.js';
import { auth } from '../firebase'

const image = { uri: "../Images/Home.png" };
const Login = () =>
{
    const [loginSate, setLoginState] = useState(false);
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoginState(true);
      }
    })

    return unsubscribe
  }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }
    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email);
          // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
     }
    return (
        <>
        
      {loginSate ? <Load/> :<View
        style={styles.container}
        behavior="padding"

    >
            <ImageBackground source={require('../Images/background.jpg')} style={{width: '100%', height: '100%',flex:1,justifyContent: 'center'}}>
            <View style={styles.img}>
            
            </View>
            <View style={styles.inputContainer}>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
            >
            <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>}
        </>
   )

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
      width: '100%',
      alignItems: "center",
      justifyContent: 'center',
     
      
    },
    input: {
        width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
    
        width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })

export default Login ;