import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

class Form1 extends Component {
  render() {
    return (
      <div className="form1-container-div">
        <TextField
          hintText="Enter Username"
          floatingLabelText="Username"
          floatingLabelFixed={true}
        />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
        />
        <TextField
          hintText="Enter Email"
          floatingLabelText="Email"
          floatingLabelFixed={true}
        />
        <RaisedButton label="Back" secondary={true} />
        <RaisedButton label="Next" primary={true} />
      </div>
    );
  }
}

export default Form1;
