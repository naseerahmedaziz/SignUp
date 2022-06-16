import { axios } from 'axios';
import React, { useState, useContext } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import {
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

const SignInScreen = () => {

  const { state, signup } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = () => {
    axios.post("/signup", {
      email: email,
      password: password
    });

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagemainview}>
        <Image
          source={require("../assets/signin.png")}
          style={styles.imagestyle}
          resizeMode="contain"
        />
      </View>

      <View style={{ height: "12%", width: "100%", justifyContent: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#17255A", marginLeft: "5%" }} t>Sign In</Text>
      </View>

      <View style={styles.inputmainview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter the Email"
          placeholderTextColor="#717FC4"
          autoCapitalize='none'

          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={{ ...styles.inputmainview, marginTop: "5%" }}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter the Password"
          placeholderTextColor="#717FC4"
          autoCapitalize='none'

          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={{ height: "12%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "3%" }}>
        <TouchableOpacity style={{ height: "80%", width: "90%", justifyContent: "center", alignItems: "center", backgroundColor: "#7180C4", borderRadius: 15 }}
          onPress={() => signup({ email, password })}
        >
          <Text style={{ color: "#FFF", fontSize: 19, fontWeight: "500" }}>Sign In</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    backgroundColor: "#FFF"
  },
  imagemainview: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    smarginTop: "5%"
  },
  imagestyle: {
    height: "100%",
    width: "100%"
  },
  inputmainview: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textinput: {
    height: "90%",
    width: "90%",
    borderWidth: 3,
    borderColor: "#717FC4",
    borderRadius: 15,
    paddingHorizontal: 10
  }
})

export default SignInScreen;