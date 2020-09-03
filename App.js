import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button,  Alert, Dimensions } from 'react-native';

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
    const { input1, input2, input3, input4, x, x1, x2, SNT } = this.state;
    let a, b, c , d;
      a = parseInt(input1)
      b = parseInt(input2)
      c = parseInt(input3)
      d = parseInt(input4)
    this.setState({ visible: true})
    if ( a != NaN && b != NaN && c != NaN ){
      let delta, kq1, kq2, cc
        delta = b*b - 4*a*c;
      if(delta > 0) {
        kq1 = (-b - Math.Sqrt(delta)) / 2 * a;
        kq2 = (-b + Math.Sqrt(delta)) / 2 * a;

        this.setState({ x1: kq1, x2: kq2})
      }
      else if (delta == 0) {
        cc = -b / 2 * a;
        this.setState({ x: cc });
      }
      else this.setState({ err: 'Vo Nghiem' });
    }
    else if (d != NaN ){
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
          index = SNT.findIndex(item => item == n);
          if(index == -1){
            SNT.push(n);
            this.setState({ SNT });
          }
        }
      }
    }
    else this.setState({ err: "Loi CMNR "})
    this.handleRender();
  }

  handleRender = () => {
    const { err, SNT, x, x1, x2, visible } = this.state;
    this.setState({ input1: '', input2: '', input3: '', input4: '' })
    const value = 'x1 = ' + x1 + 'và x2 = ' + x2;

    if (err != '') {
      return Alert.alert('Thông báo' , err );
      } else if ( x != '' || x1 != '' && x2 != '') {
        return Alert.alert('Kết quả' ,  (x != '' ? x : value) );
      } else {
        return Alert.alert('Kết quả' + SNT );
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
            style={{ width: screenWidth*2/5, alignItems: "center", padding: 10, backgroundColor: '#5488c7' }}
            onPress={() => this.handleToPT()}
            title="Kết quả"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
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

