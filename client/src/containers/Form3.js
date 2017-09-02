import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setForm3 } from '../actions/form3Actions';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

class Form3 extends Component {
  componentWillMount() {
    this.form3 = {
      streetaddress: this.props.form3.streetaddress,
      city: this.props.form3.city,
      state: this.props.form3.state,
      zip: this.props.form3.zip
    };

    this.saveInformation = this.saveInformation.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event, value) {
    this.form3[event.target.name] = value;
  }

  saveInformation() {
    this.props.setForm3(this.form3);
  }

  render() {
    return (
      <div className="form3-container-div">
        <TextField
          hintText="Enter Street Address"
          floatingLabelText="Street Address"
          floatingLabelFixed={true}
          errorText=""
          name="streetaddress"
          defaultValue={this.form3.streetaddress}
          onChange={this.handleInput}
        />
        <TextField
          hintText="Enter City"
          floatingLabelText="City"
          floatingLabelFixed={true}
          errorText=""
          name="city"
          defaultValue={this.form3.city}
          onChange={this.handleInput}
        />
        <TextField
          hintText="Enter State"
          floatingLabelText="State"
          floatingLabelFixed={true}
          errorText=""
          name="state"
          defaultValue={this.form3.state}
          onChange={this.handleInput}
        />
        <TextField
          hintText="Enter Zip"
          floatingLabelText="Zip"
          floatingLabelFixed={true}
          errorText=""
          name="zip"
          defaultValue={this.form3.zip}
          onChange={this.handleInput}
        />
        <Link to="/form2">
          <RaisedButton label="Back" secondary={true} />
        </Link>
        <Link to="/finish">
          <RaisedButton label="SAVE" primary={true} onClick={this.saveInformation} />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form3: state.form3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm3: form3 => {
      dispatch(setForm3(form3));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form3);

