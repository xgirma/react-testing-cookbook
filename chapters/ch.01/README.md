# Setting up dependencies

Required libraries, `mocha` for running tests, `expect` for writting assertions and `ReactTestUtils` to make writting 
test for React and JSX. 

```json
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  },
  "devDependencies": {
    "expect": "^21.2.1",
    "mocha": "^4.0.1"
  }
```

### Test Utilities
`react-addons-test-utils` package is deprecated as of React version 15.5.0. Currently, `TestUtils` have been moved to 
`react-dom/test-utils` and `Shallow` renderer has been moved to `react-test-renderer/shallow`.

```javascript
import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
```  
