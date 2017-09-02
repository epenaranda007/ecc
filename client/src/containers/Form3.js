import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetForm1 } from '../actions/form1Actions';
import { resetForm2 } from '../actions/form2Actions';
import { resetForm3, setForm3 } from '../actions/form3Actions';
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
    this.buttonDisabled = !this.validateInformation();

    this.saveInformation = this.saveInformation.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validateInformation = this.validateInformation.bind(this);
  }

  handleInput(event, value) {
    this.form3[event.target.name] = value;
    if(this.validateInformation()) {
      this.buttonDisabled = false;      
    } else {
      this.buttonDisabled = true;
    }
    this.setState({});
  }

  validateInformation() {
    const { streetaddress, city, state, zip } = this.form3;
    if(streetaddress === '' || city === '' || state === '' || zip === '') {
      return false;
    }
    return true;
  }

  saveInformation() {
    if(this.validateInformation()) {
      this.props.setForm3({
        username: this.props.form1.username, 
        ...this.form3
      })
      .then(() => {
        this.props.resetForm1();
        this.props.resetForm2();
        this.props.resetForm3();
      })
      .then(() => {
        this.props.history.push('/');
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
            hintText="Enter Street Address"
            floatingLabelText="Street Address"
            floatingLabelFixed={true}
            name="streetaddress"
            defaultValue={this.form3.streetaddress}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter City"
            floatingLabelText="City"
            floatingLabelFixed={true}
            name="city"
            defaultValue={this.form3.city}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter State"
            floatingLabelText="State"
            floatingLabelFixed={true}
            name="state"
            defaultValue={this.form3.state}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <TextField
            hintText="Enter Zip"
            floatingLabelText="Zip"
            floatingLabelFixed={true}
            name="zip"
            defaultValue={this.form3.zip}
            onChange={this.handleInput}
            style={style.field}
          />
          <br />
          <Link to="/form2" style={style.backbutton} >
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
    form3: state.form3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm3: form3 => {
      return dispatch(setForm3(form3));
    },
    resetForm1: () => { 
      dispatch(resetForm1());
    },
    resetForm2: () => { 
      dispatch(resetForm2());
    },
    resetForm3: () => { 
      dispatch(resetForm3());
    }
  };
};

Form3.contextTypes = {
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Form3);

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