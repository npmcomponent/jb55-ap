*This repository is a mirror of the [component](http://component.io) module [jb55/ap](http://github.com/jb55/ap). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jb55-ap`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# ap

  Apply function, otherwise return value

## Installation

    $ component install jb55/ap

## API

```javascript
var ap = require('ap')
  , valA = function(x) { return 2 * x; }
  , valB = 4
  , a = ap(valA, 2)
  , b = ap(valB, 2)
  , tru = a === b;
```

## License

  MIT
