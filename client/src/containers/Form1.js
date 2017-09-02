import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setForm1 } from '../actions/form1Actions';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

class Form1 extends Component {
  
  componentWillMount() {
    this.form1 = {
      username: this.props.form1.username,
      password: this.props.form1.password,
      email: this.props.form1.email
    };

    this.saveInformation = this.saveInformation.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event, value) {
    this.form1[event.target.name] = value;
  }

  saveInformation() { console.log('Enter key')
    this.props.setForm1(this.form1);
  }

  render() {
    return (
      
      <div className="form1-container-div">
        <TextField
          hintText="Enter Username"
          floatingLabelText="Username"
          floatingLabelFixed={true}
          errorText=""
          name="username"
          defaultValue={this.form1.username}
          onChange={this.handleInput}
        />
        <br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          floatingLabelFixed={true}
          errorText=""
          type="password"
          name="password"
          defaultValue={this.form1.password}
          onChange={this.handleInput}
        />
        <br />
        <TextField
          hintText="Enter Email"
          floatingLabelText="Email"
          floatingLabelFixed={true}
          errorText=""
          name="email"
          defaultValue={this.form1.email}
          onChange={this.handleInput}
        />
        <br />
        <Link to="/form2">
          <RaisedButton label="SAVE" primary={true} onClick={this.saveInformation} />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form1: state.form1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm1: form1 => {
      dispatch(setForm1(form1));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form1);
