import React, { Component } from 'react';
import data from '../../chatdata.json';
import { orderByDate } from '../../Util';
import ListChats from '../ListChats';
import Chat from '../Chat';

class Main extends Component {
  constructor(props) {
    super(props);
    const orderedData = this.getOrderedData(data);
    this.state = {
      orderedData,
      currentChat: orderedData[0],
    }
  }

  getOrderedData(fullData) {
    const filtered = fullData.filter(record => record.type === 'chat');
    return orderByDate(filtered, 'created_at').reverse();
  }

  handleSearch(term) {
    let orderedData = this.getOrderedData(data);
    if (term !== "") {
      orderedData = orderedData.filter(chat => chat.requested_by.startsWith(term) || chat.initial_message.indexOf(term) > 0);
    }
    this.setState({ orderedData });
  }

  handleChatClick(chat) {
    this.setState({ currentChat: chat });
  }

  render() {
    return (
      <div>
        <ListChats
          data={this.state.orderedData}
          currentChat={this.state.currentChat.id}
          onChatClick={this.handleChatClick.bind(this)}
          onSearch={this.handleSearch.bind(this)} />
        <Chat transcript={this.state.currentChat.transcript} />
      </div>
    );
  }
}

export default Main;