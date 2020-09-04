import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button,  Alert, Dimensions, TouchableOpacity, TouchableOpacityBase } from 'react-native';

const screenWidth = Dimensions.get("window").width;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      x1: '',
      x2: '',
      x: '',
      err : '',
      SNT: [],
      visible: false
    }
  }

  handleToPT = () => {
    const { input1, input2, input3, input4, x, x1, x2, SNT,err } = this.state;
    let a, b, c , d,  delta, kq1, kq2, cc;
      a = parseInt(input1);
      b = parseInt(input2);
      c = parseInt(input3);
    this.setState({ visible: true});
			delta = Math.pow(b,2) - (4*a*c);
		if(delta > 0) {
			kq1 = (-b - Math.sqrt(delta)) / 2 * a;
			kq2 = (-b + Math.sqrt(delta)) / 2 * a;
			const value = 'x1 = ' + kq1 + 'và' + 'x2 = ' + kq2;
			return Alert.alert('Kết quả',value);
		}
		else if (delta == 0) {
			cc = -b / 2 * a;
			return Alert.alert('Kết quả', 'x = ' + cc);
		}
		else {
			this.setState({ err: 'Vo Nghiem' });
      return Alert.alert('Thông báo' , err );
		}
  }

  handleSNT = () => {
    const { input4,SNT } = this.state;
    let d, count=0;
    d = parseInt(input4);
    if (d != NaN ){
      for(var n = 1 ; n <= d; n++){
        let check = true;
        if (n < 2){
            check = false;
        } else {
          for (var i = 2; i <= n-1; i++ )
          {
            if (n % i == 0){
              check = false;
              break;
            }
          }
        }

        if (check) {
         let index = SNT.findIndex(item => item == n);
          if(index == -1){
            SNT.push(n);
            this.setState({ SNT });
          }
        }
      }
      return Alert.alert('Kết quả', 'các số nguyên tố là: ' + SNT );
    }
  }

  render() {
    const { input1, input2, input3, input4 } = this.state;
    return (
      <ScrollView>
        <View style={[style.header]}>
          <Text style={[style.whitecl,style.fs20]}>Giải phương trình</Text>
        </View>
        <View>
          <TextInput 
            style={[style.bdbl]}
            keyboardType='numeric'
            placeholder='Nhập a: '
            returnKeyType='next'
            defaultValue={input1}
            onChangeText={e => this.setState({input1: e})}
          >
          </TextInput>
          <TextInput
            style={[style.bdbl]}
            keyboardType='numeric'
            placeholder='Nhập b: '
            returnKeyType='next'
            defaultValue={input2}
            onChangeText={e => this.setState({input2: e})}
          >
          </TextInput>
          <TextInput
            style={[style.bdbl]}
            keyboardType='numeric'
            placeholder='Nhập c: '
            returnKeyType='next'
            defaultValue={input3}
            onChangeText={e => this.setState({input3: e})}
          >
          </TextInput>
          <TextInput
            style={[style.bdbl]}
            keyboardType='numeric'
            placeholder='Nhập n để kiểm tra số nguyên tố: '
            returnKeyType='next'
            defaultValue={input4}
            onChangeText={e => this.setState({input4: e})}
          >
          </TextInput>
        </View>
        <View>
          <Button
            style={{width: screenWidth*2/5, alignItems: "center", padding: 10, backgroundColor: '#5488c7' }}
            onPress={() => this.handleToPT()}
            title="Kết quả phương trình"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
					 <TouchableOpacity style={{marginTop:20,alignItems:"center"}} onPress={() => this.handleSNT()}>
						 <Text style={{padding:10,backgroundColor:"purple",color:"white"}}>KQ SNT</Text>
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
    width: screenWidth*4/5,
    margin: 10,
    marginLeft: screenWidth*1/10, 
    textAlign: 'center',
    borderColor: '#252a30',
    borderWidth: 1,
    marginBottom:5,
  },
});

