
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
