import React, { Component } from 'react';
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

    this.saveInformation = this.saveInformation.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event, value) {
    this.form2[event.target.name] = value;
  }

  saveInformation() {
    this.props.setForm2(this.form2);
  }

  render() {
    return (
      <div className="form2-container-div">
        <TextField
          hintText="Enter Firstname"
          floatingLabelText="Firstname"
          floatingLabelFixed={true}
          errorText=""
          name="firstname"
          defaultValue={this.form2.firstname}
          onChange={this.handleInput}
        />
        <TextField
          hintText="Enter Lastname"
          floatingLabelText="Lastname"
          floatingLabelFixed={true}
          name="lastname"
          defaultValue={this.form2.lastname}
          onChange={this.handleInput}
        />
        <TextField
          hintText="Enter Telephone Number"
          floatingLabelText="Telephone Number"
          floatingLabelFixed={true}
          name="telephonenumber"
          defaultValue={this.form2.telephonenumber}
          onChange={this.handleInput}
        />
        <Link to="/form1">
          <RaisedButton label="Back" secondary={true} />
        </Link>
        <Link to="/form3">
          <RaisedButton label="SAVE" primary={true} onClick={this.saveInformation} />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form2: state.form2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm2: form2 => {
      dispatch(setForm2(form2));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form2);
