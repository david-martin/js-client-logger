Client side (Browser) javascript logger. Makes a global javascript variable available, 'logger', which provides a variety of safe logging functions e.g. logger.debug(), logger.error(). They all use the browsers console to output log information, and fail gracefully in the event of no console object being available.

There are 4 levels of logging: debug, info, warn and error. Where available, these will use the browsers built in console level functions e.g. console.debug(), console.error()

# Installation

In your html, add the following script before your code

```html
<script type="text/javascript" src="logger.js"></script>
```

# Usage

## Log a message

```javascript
logger.debug('some value');
// => Nov-15-2011-23:08:25 (DEBUG) >>> some value

logger.info('another value');
// => Nov-15-2011-23:08:25 (INFO) >>> another value

logger.warn('a warning log message');
// => Nov-15-2011-23:08:25 (WARN) >>> a warning log message

logger.error('something serious went wrong');
// => Nov-15-2011-23:08:25 (ERROR) >>> something serious went wrong
```

Multiple strings and/or vars can be passed in as arguments, which automatically get concatenated.

```javascript
var test = 'debugged';
logger.debug('this is a ', test, ' value');
// => Nov-15-2011-23:08:25 (ERROR) >>> this is a debugged value
```

## Disable logging

```javascript
// default is enabled = true
logger.enabled = false;
```

## Set the logging level

```javascript
// default level is 3
logger.level = 0; // only show errors

logger.level = 3; // highest level, show all logging
```

For further example usage, see index.html