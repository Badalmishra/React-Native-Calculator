import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { grey } from 'ansi-colors';
export default class Head extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View 
        style={this.style.View}>
        <View 
            style={[this.style.Child,{flex:1}]} >
              <Text>Result : {this.props.result}</Text>
        </View>
        <View 
            style={[this.style.Child,{flex:2}]}>
              <Text style={[this.style.Text]}>{this.props.evalString}</Text>
        </View>

      </View>
    );
  }
  style = {
    View:{
      flex: 1, flexDirection: 'column',
    },
    Child:{
      width:"100%",
      flexDirection: 'row',
      borderWidth:0.5,
      paddingRight:20,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderColor:"grey"
    },
    Text:{
      color:"grey",
      fontSize:20,
    }
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('Head', () => Head);
