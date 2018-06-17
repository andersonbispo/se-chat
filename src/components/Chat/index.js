import React from 'react';
import moment from 'moment';
import Message from '../Message';
import { orderByDate } from '../../Util';
import './styles.css';

const Chat = ({ transcript }) => {

  let lastDate = null;
  let lastTime = null;
  let lastAlias = null

  const areDifferentDates = (date1, date2) => {
    const first = date1.startOf('day');
    const second = date2.startOf('day');
    return first.isAfter(second) || first.isBefore(second);
  }

  const getDate = (currentDate) => {
    if (lastDate === null || areDifferentDates(currentDate, lastDate)) {
      lastDate = currentDate;
      return (
        <div className="chat__message-date">
          {currentDate.format('dddd, MMMM YYYY')}
          <hr />
        </div>
      );
    }
    return null;
  };

  const showHeader = (message) => {
    const time = moment(message.date).format('HH:mm');
    let isToShow = false;
    if (lastAlias === null || lastAlias !== message.alias) {
      lastAlias = message.alias;
      isToShow = true;
    }
    if (lastTime === null || lastTime !== time) {
      lastTime = time;
      isToShow = true;
    }
    return isToShow;
  }

  const messages = orderByDate(transcript, 'date').map((message, count) => {
    const date = moment(message.date);
    return (
      <div key={count} className="chat__message">
        {getDate(date)}
        <Message {...message} showHeader={showHeader(message)} />
      </div>
    )
  });

  return (
    <div className="chat">
      {messages}
    </div>
  );
}

export default Chat;