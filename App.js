import React, {Component} from 'react';
import {Button, View, Text, Alert} from 'react-native'
import MyButton from './components/MyButton'

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{marginTop:25, width:100, marginLeft:115}}>
          <MyButton
            myColor="#cd8afc"
            myTitle="Sound 1"
            onPress={() => alert("sound 1")}/>
        </View>
        <View style={{marginTop:25, width:100, marginLeft:115}}>
          <MyButton
            myColor="lightblue"
            myTitle="Sound 2"
            onPress={() => alert("sound 2")}/>
        </View>
        <View style={{marginTop:25, width:100, marginLeft:115}}>
          <MyButton
            myColor="pink"
            myTitle="Sound 3"
            onPress={() => alert("sound 3")}/>
        </View>
        <View style={{marginTop:25, width:100, marginLeft:115}}>
          <MyButton
            myColor="lightgreen"
            myTitle="Sound 4"
            onPress={() => alert("sound 4")}/>
        </View>
        <View style={{marginTop:25, width:100, marginLeft:115}}>
          <MyButton
            myColor="#f9c381"
            myTitle="Sound 5"
            onPress={() => alert("sound 5")}/>
        </View>
      </View>
    );
  }
}