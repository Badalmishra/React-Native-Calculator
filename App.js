import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Keyboard from './Components/Keyboard/Keyboard';
import Head from './Components/Head/Head';
export default class FlexDirectionBasics extends Component {
  constructor(props){
    super(props)
    this.state={
      evalString:"0",
      result:"0",
      middle:"0"
    }
  }
  evalStringConcat(input){
    if (this.state.evalString=="0") {
      this.setState({
        evalString:""
      },()=>{
        this.setState({
          evalString:this.state.evalString+""+input,
          middle:this.state.middle+""+input,
        })
      })
    } else {
      this.setState({
        evalString:this.state.evalString+""+input,
        middle:this.state.middle+""+input,
      })
    }
  }
  upAction(input){
    switch (input) {
      case "Del":
        let string = this.state.evalString;
        if(string.length>0){
          string = string.slice(0,(string.length-1))
          this.setState({evalString:string})
        }
        break;
      case "C":
        this.setState({evalString:""})
        break;
      case "=":
        let val = this.state.middle;
        let result = eval(val)
        this.setState({result,middle:result})
        break;
      
      default:
        break;
    }
    
  }
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column',top:"4%"}}>
        <Head 
          evalString={this.state.evalString}
          result={this.state.result}/>
        <Keyboard 
          upKey={this.evalStringConcat.bind(this)}
          upAction={this.upAction.bind(this)}/>
      </View>
    );
  }
  style = {
    flex: 1,
    flexDirection: 'column', 
    height: 50,
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
