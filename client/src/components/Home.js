import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

const Home = () => (
  <div className="home-container-div">
    <div className="home-inner-container-div">
      <div className="home-details-div">
        <h1>EKA SOLUTIONS</h1>
        <p>Start onboarding process by clicking Start button.</p>
        <Link to="/form1" >
          <RaisedButton label="Start" primary={true} />
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
