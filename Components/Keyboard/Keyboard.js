import React, { Component } from 'react';
import { AppRegistry, View, Text,Alert, TouchableOpacity,TouchableHighlight ,Button } from 'react-native';
import { AuthSession } from 'expo';
export default class Keyboard extends Component {
    alertme(input){

        this.props.upKey(input)
    }
    actionme(input){
        this.props.upAction(input)
    }
  render() {
    return (
      
      <View style={{flex: 3, flexDirection: 'row'}}>
          {/* numbers */}
          <View style={{flex:4,flexDirection:'column'}}>
                {/* Rows */}
                <View style={{flex:4,flexDirection:'row'}}>
                    <TouchableHighlight  onPress={this.alertme.bind(this,1)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>1</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,2)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>2</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,3)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>3</Text>
                    </TouchableHighlight >
                </View>
                {/* Rows */}
                <View style={{flex:4,flexDirection:'row'}}>
                    <TouchableHighlight  onPress={this.alertme.bind(this,4)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>4</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,5)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>5</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,6)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>6</Text>
                    </TouchableHighlight >
                </View>
                {/* Rows */}
                <View style={{flex:4,flexDirection:'row'}}>
                    <TouchableHighlight  onPress={this.alertme.bind(this,7)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>7</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,8)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>8</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,9)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>9</Text>
                    </TouchableHighlight >
                </View>
                {/* Rows */}
                <View style={{flex:4,flexDirection:'row'}}>
                    <TouchableHighlight  onPress={this.actionme.bind(this,"Del")} 
                        style={[this.style.View, {backgroundColor: 'red'}]}>
                            <Text style={{color:"white"}}>Del</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.alertme.bind(this,0)} 
                        style={[this.style.View, {backgroundColor: 'white'}]}>
                            <Text style={this.style.Text}>0</Text>
                    </TouchableHighlight >
                    <TouchableHighlight  onPress={this.actionme.bind(this,"C")} 
                        style={[this.style.View, {backgroundColor: 'black'}]}>
                            <Text style={{color:"white"}}>C</Text>
                    </TouchableHighlight >
                </View>
            </View>
            {/* operators */}
            <View style={{flex:1,flexDirection:"column"}}>
                <TouchableHighlight  onPress={this.alertme.bind(this,"+")} 
                    style={[this.style.View,this.style.operator ]}>
                        <Text style={[this.style.operatorText]}>+</Text>
                </TouchableHighlight >
                <TouchableHighlight  onPress={this.alertme.bind(this,"-")} 
                    style={[this.style.View,this.style.operator ]}>
                        <Text style={[this.style.operatorText]}>-</Text>
                </TouchableHighlight >
                <TouchableHighlight  onPress={this.alertme.bind(this,"*")} 
                    style={[this.style.View,this.style.operator ]}>
                        <Text style={[this.style.operatorText]}>*</Text>
                </TouchableHighlight >
                <TouchableHighlight  onPress={this.alertme.bind(this,"/")} 
                    style={[this.style.View,this.style.operator ]}>
                        <Text style={[this.style.operatorText]}>/</Text>
                </TouchableHighlight >
                <TouchableHighlight  onPress={this.actionme.bind(this,"=")} 
                    style={{ flex: 2,justifyContent: 'center',alignItems: 'center',backgroundColor: 'grey'} }>
                        <Text style={[this.style.operatorText]}>=</Text>
                </TouchableHighlight >
            </View>
          
          {/* Row ended */}
      </View>
    );
  }
  style = {
    View:{
        flex: 1,     
        justifyContent: 'center',
        alignItems: 'center'
    },
    operator:{
        backgroundColor: 'orange',
    },
    operatorText:{
        color:"white",
        fontSize:20,
    }
  }
  
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('Keyboard', () => Keyboard);
