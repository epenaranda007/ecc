import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

const Home = () => (
  <div className="home-container-div">
    <Link to="/form1">
      <RaisedButton label="Start Onboard Process" />
    </Link>
  </div>
);

export default Home;