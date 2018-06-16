import React, { Component } from 'react';
import data from '../../chatdata.json';
import ListChats from '../ListChats';

class Main extends Component {
  render() {
    return (
      <div>
        <ListChats data={data} />
      </div>
    );
  }
}

export default Main;