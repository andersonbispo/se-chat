import React from 'react';
import './styles.css';

const ListChat = ({ data }) => {

  const formattedDate = timestamp => {
    return new Date(timestamp).toLocaleDateString();
  };

  const chats = data.filter(record => record.type === 'chat').map(chat => (
    <div key={chat.id} className="list-chats__chat">
      <h1 className="list-chats__title">
        {chat.requested_by}
        <span className="list-chats__date">{formattedDate(chat.created_at)}</span>
      </h1>
      <p>{chat.initial_message}</p>
    </div>
  ));

  return (
    <div className="list-chats">
      {chats}
    </div>
  );
};

export default ListChat;