var User = require('./user').User;

module.exports = {
  get: function (_, res) {

    new User({
      name: 'Eric'
    })
    .save();

    res.send('Welcome to ZignalLabs API');
  }
};