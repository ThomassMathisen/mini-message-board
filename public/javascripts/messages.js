const moment = require('moment');
let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();

// default messages shown in index
const messages = [
  {
    title: 'Hello there',
    description:
      'You were my brother, Anakin!',
    username: 'Obi-Wan Kenobi',
    date: date2,
  },
  {
    title: 'there Hello',
    description:
      'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering...',
    username: 'Master Yoda',
    date: date,
  },
];

module.exports = messages;