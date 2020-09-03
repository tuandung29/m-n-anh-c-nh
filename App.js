import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TextInput, StyleSheet,Button,TouchableOpacity,alert, Alert } from 'react-native';

export default class App extends Component {
  render() {
      return (
        <ScrollView>
            <View style={[style.header]}>
                <Text style={[style.whitecl,style.fs20]}>Giải phương trình</Text>
            </View>
            <View>
              <TextInput style={[style.bdbl]} keyboardType='numeric'
                      placeholder='Nhập a: '
                      returnKeyType='next'>
              </TextInput>
              <TextInput style={[style.bdbl]} keyboardType='numeric'
                      placeholder='Nhập b: '
                      returnKeyType='next'>
              </TextInput>
              <TextInput style={[style.bdbl]} keyboardType='numeric'
                      placeholder='Nhập c: '
                      returnKeyType='next'>
              </TextInput>
              <TextInput style={[style.bdbl]} keyboardType='numeric'
                      placeholder='Nhập n để kiểm tra số nguyên tố: '
                      returnKeyType='next'>
              </TextInput>
            </View>
            <View>
                <TouchableOpacity style={[style.btn]} onPress={() => { Alert.alert('cungdev.com', 'Xin chào các bạn');}}>
                     <Text style={[style.fs20]}>kết quả</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      );    
  }
}

const style = StyleSheet.create({
  header:{
      flexDirection: "row",
      backgroundColor : "#8b0200",
      height : 100,
      justifyContent: "center",
      alignItems:"center",
  },

  whitecl: {
    color: "#ffffff",
  },
  fs20:{
    fontSize: 20,
    fontWeight:"bold",
  },

  bdbl:{
      borderColor: '#252a30',
      borderWidth: 1,
      marginBottom:5,
  },
  btn:{
    alignItems: "center",
    padding: 10,
    backgroundColor: '#5488c7',
    
  }
});

