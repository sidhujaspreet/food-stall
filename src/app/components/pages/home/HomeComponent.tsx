import * as React from 'react';
import './HomeComponent.scss';

class HomeComponent extends React.Component<{}> {
  render() {
    return (
        <div className="home-wrapper">
          <h5>Home page alert!!! </h5>
          <p>Food Stall in development.</p>
        </div>
    );
  }
}

export default HomeComponent;
