# React Testing: Setting up dependencies

Test runner `mocha`

Assertions `expect` library

react-dom/test-utils. [`ReactTestUtils`](https://reactjs.org/docs/test-utils.html) makes it easy to test React components in the testing framework of your choice.

```javascript
import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
```

`react-addons-test-utils` is deprecated as of React version 15.5.0  

`TestUtils` have been moved to `react-dom/test-utils`

`Shallow renderer` has been moved to `react-test-renderer/shallow`

[source](react-dom/test-utils https://www.npmjs.com/package/react-addons-test-utils)