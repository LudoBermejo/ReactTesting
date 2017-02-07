import React from 'react';
import Nav from 'Nav';

const Main = props => (
  <div>
    <div>
      <Nav />
      { props.children }
    </div>
  </div>
);

module.exports = Main;
