import React, { Component, PropTypes } from 'react';
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
    this.buttonDisabled = !this.validateInformation();

    this.saveInformation = this.saveInformation.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validateInformation = this.validateInformation.bind(this);
  }

  handleInput(event, value) {
    this.form1[event.target.name] = value;
    if(this.validateInformation()) {
      this.buttonDisabled = false;      
    } else {
      this.buttonDisabled = true;
    }
    this.setState({});
  }

  validateInformation() {
    const { username, password, email } = this.form1;
    if(username === '' || password === '' || email === '') {
      return false;
    }
    return true;
  }

  saveInformation() {
    if(this.validateInformation()) {
      this.props.setForm1(this.form1)
      .then(() => {
        this.props.history.push('/form2');
      });
    }    
  }

  render() {
    return (
      
      <div className="form-container-div">
        <div className="form-header-div">
          <h1>EKA Solutions</h1>
        </div>
        <div className="form-fields-div">
          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            floatingLabelFixed={true}
            name="username"
            defaultValue={this.form1.username}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter Password"
            floatingLabelText="Password"
            floatingLabelFixed={true}          
            type="password"
            name="password"
            defaultValue={this.form1.password}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter Email"
            floatingLabelText="Email"
            floatingLabelFixed={true}
            name="email"
            defaultValue={this.form1.email}
            onChange={this.handleInput}
            style={style.field}
          />      
          <br />
          <RaisedButton label="SAVE" primary={true} 
            disabled={this.buttonDisabled}
            onClick={this.saveInformation} 
            style={style.savebutton} />          
          <br />
        </div>
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
      return dispatch(setForm1(form1));
    }
  };
};

Form1.contextTypes = {
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Form1);

const style = {
  field: {
    width: '100%',
  },
  savebutton: {
    float: 'right',
    marginTop: '10px',

  }
};
