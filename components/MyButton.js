import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class MyButton extends Component {
  render(){
    return(
      <Button color={this.props.myColor} title={this.props.myTitle}/>
    )
  }
}

export default MyButton