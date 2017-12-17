# React Testing: Setting up dependencies

1. Test runner `mocha`

2. Assertions `expect` library

3. react-dom/test-utils

        import ReactTestUtils from 'react-dom/test-utils'; // ES6
        
        var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm

[Test Utilities](https://reactjs.org/docs/test-utils.html)

`ReactTestUtils` makes it easy to test React components in the testing framework of your choice


# Footnote

>`react-addons-test-utils` is deprecated as of version 15.5.0 React. 

>`TestUtils` have been moved to `react-dom/test-utils`

>`Shallow rendere`r has been moved to `react-test-renderer/shallow`

[source](react-dom/test-utils https://www.npmjs.com/package/react-addons-test-utils)