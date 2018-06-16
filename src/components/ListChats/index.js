import React from 'react';
import classNames from 'classnames';
import './styles.css';

const ListChat = ({ data, currentChat, onChatClick, onSearch }) => {

  const formattedDate = timestamp => {
    return new Date(timestamp).toLocaleDateString();
  };

  const chats = data.map(chat => {
    const classes = classNames({
      'list-chats__chat': true,
      'list-chats__current-chat': currentChat === chat.id,
    });
    return (
      <div key={chat.id} className={classes} onClick={() => onChatClick(chat)}>
        <h1 className="list-chats__title">
          {chat.requested_by}
          <span className="list-chats__date">{formattedDate(chat.created_at)}</span>
        </h1>
        <p>{chat.initial_message}</p>
      </div>
    );
  });

  return (
    <div className="list-chats">
      <div className="list-chats__search-field">
        <input
          className="list-chats__input"
          type="search"
          placeholder="Search..."
          onChange={(event) => onSearch(event.target.value)} />
      </div>
      {chats}
    </div>
  );
};

export default ListChat;