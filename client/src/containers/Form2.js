import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setForm2 } from '../actions/form2Actions';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

class Form2 extends Component {

  componentWillMount() {
    this.form2 = {
      firstname: this.props.form2.firstname,
      lastname: this.props.form2.lastname,
      telephonenumber: this.props.form2.telephonenumber
    };

    this.buttonDisabled = !this.validateInformation();

    this.saveInformation = this.saveInformation.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validateInformation = this.validateInformation.bind(this);
  }

  handleInput(event, value) {
    this.form2[event.target.name] = value;
    if(this.validateInformation()) {
      this.buttonDisabled = false;      
    } else {
      this.buttonDisabled = true;
    }
    this.setState({});
  }

  validateInformation() {
    const { firstname, lastname, telephonenumber } = this.form2;
    if(firstname === '' || lastname === '' || telephonenumber === '') {
      return false;
    }
    return true;
  }

  saveInformation() {
    if(this.validateInformation()) {
      this.props.setForm2({
        username: this.props.form1.username, 
        ...this.form2
      })
      .then(() => {
        this.props.history.push('/form3');
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
            hintText="Enter Firstname"
            floatingLabelText="Firstname"
            floatingLabelFixed={true}
            name="firstname"
            defaultValue={this.form2.firstname}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter Lastname"
            floatingLabelText="Lastname"
            floatingLabelFixed={true}
            name="lastname"
            defaultValue={this.form2.lastname}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter Telephone Number"
            floatingLabelText="Telephone Number"
            floatingLabelFixed={true}
            name="telephonenumber"
            defaultValue={this.form2.telephonenumber}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <Link to="/form1" style={style.backbutton} >
            <RaisedButton label="Back" secondary={true} />
          </Link>
          <RaisedButton label="SAVE" primary={true} 
            disabled={this.buttonDisabled}
            onClick={this.saveInformation} 
            style={style.savebutton} 
          />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form1: state.form1,
    form2: state.form2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm2: form2 => {
      return dispatch(setForm2(form2));
    }
  };
};

Form2.contextTypes = {
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Form2);

const style = {
  field: {
    width: '100%',
  },
  backbutton: {
    float: 'left',
    marginTop: '10px'
  },
  savebutton: {
    float: 'right',
    marginTop: '10px'
  }
};