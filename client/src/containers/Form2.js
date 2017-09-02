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
    this.props.setForm2({
      username: this.props.form1.username, 
      ...this.form2
    });
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
            errorText=""
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
          <Link to="/form3" style={style.savebutton} >
            <RaisedButton label="SAVE" primary={true} onClick={this.saveInformation}  />
          </Link>
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
      dispatch(setForm2(form2));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form2);

const style = {
  field: {
    width: '100%',
  },
  backbutton: {
    float: 'left',
    paddingTop: '10px'
  },
  savebutton: {
    float: 'right',
    paddingTop: '10px'
  }
};