import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import './styles.css';

const Message = ({ date, message, alias, showHeader, id = null }) => {
  const classes = classNames({
    'message': true,
    'right-side': id !== null,
    'left-side': id === null,
  });
  const header = (
    <div className="message__header">
      <div className="message__alias">
        {alias}
        <span className="message__hour">{moment(date).format('HH:mm')}</span>
      </div>
      <div className="triangle-up"></div>
    </div>
  );
  return (
    <div className={classes}>
      {showHeader ? header : ""}
      <div className="message__text">{message}</div>
    </div>
  );
};

export default Message;