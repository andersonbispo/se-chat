import React, { Component } from 'react';
import data from '../../chatdata.json';
import ListChats from '../ListChats';
import Chat from '../Chat';

class Main extends Component {
  render() {
    return (
      <div>
        <ListChats data={data} />
        <Chat transcript={data[0].transcript} />
      </div>
    );
  }
}

export default Main;