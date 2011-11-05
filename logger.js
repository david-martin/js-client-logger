/*global console
*/
var loggerEnabled = true;
var loggerLevel = 3;
var logger = {
  output: function (action, msgs) {
    if (loggerEnabled && 'undefined' !== typeof console) {
      msgs = Array.prototype.slice.call(msgs);
      if (msgs && msgs.length > 0) {
        var msg;

        msg = new Date().toString() + ' (' + action + ') >> ' + msgs.join('');
        if ('log' === action || loggerLevel >= logger[action + 'Level']) {
          if ('undefined' !== typeof console[action]) {
            console[action](msg);
          } else {
            console.log(msg);
          }
        }
      }
    }
  },

  debugLevel: 3,
  debug: function () {
    logger.output('debug', arguments);  
  },

  infoLevel: 2,
  info: function () {
    logger.output('info', arguments);
  },

  warnLevel: 1,
  warn: function () {
    logger.output('warn', arguments);
  },

  errorLevel: 0,
  error: function () {
    logger.output('error', arguments);
  },

  log: function () { // no level i.e. always logged if logging enabled
    logger.output('log', arguments);
  }
};