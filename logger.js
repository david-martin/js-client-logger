/*global console
*/
// https://github.com/irldavem/js-client-logger
(function () {
  window.logger = {
    enabled: true,
    level: 3,
    output: function (action, msgs) {
      if (logger.enabled && 'undefined' !== typeof console) {
        msgs = Array.prototype.slice.call(msgs);
        if (msgs && msgs.length > 0) {
          var msg = new Date().toString().split(' ').splice(1, 4).join('-') + ' (' + action + ') >>> ' + msgs.join('');
          if (logger.level >= logger[action]) {
            if ('undefined' !== typeof console[action.toLowerCase()]) {
              console[action.toLowerCase()](msg);
            } else {
              console.log(msg);
            }
          }
        }
      }
    },

    DEBUG: 3,
    debug: function () {
      logger.output('DEBUG', arguments);  
    },

    INFO: 2,
    info: function () {
      logger.output('INFO', arguments);
    },

    WARN: 1,
    warn: function () {
      logger.output('WARN', arguments);
    },

    ERROR: 0,
    error: function () {
      logger.output('ERROR', arguments);
    }
  };
})();