# JSX error diffs

When writing React component tests, `it can be hard to decipher the error diffs of broken tests`, since **they are just the final objects that React uses under the hood**. There are some nice `libraries` that let you extend your assertion library to _show JSX diffs_; in this lesson we will wire up one of these libraries to show how to debug JSX error diffs from your React tests. We will also show how narrowing down what you are testing helps `to make the test error diffs easier to deal with`.

This lesson uses the `expect-jsx` package, but there are other options available for both expect and other assertion libraries.

```javascript
import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'

const CoolComponent = ({greeting}) => (
  <div>
    <div>Greeting</div>
    <div>{greeting}</div>
  </div>
);

describe('cool component', () => {

  it('should render the greeting', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CoolComponent greeting={"Hello again"}/>);
    const actual = renderer.getRenderOutput();
    const expected = (
      <div>
        <div>Greeting</div>
        <div>Hello again</div>
      </div>
    );
    expect(actual).toEqual(expected);
  });
});
```

Now, let's say we want to change our component, so if we go up here and we want to add an exclamation point at the end of our greeting, now we expect our test to fail.

```javascript
const CoolComponent = ({greeting}) => (
  <div>
    <div>Greeting</div>
    <div>{greeting}!</div>
  </div>
);
``` 

output
<img width="484" alt="screen shot 2017-12-17 at 2 18 48 pm" src="https://user-images.githubusercontent.com/5876481/34084437-4b85805c-e335-11e7-9325-75049472ecc5.png">

        npm install expect-jsx
        
### expect-jsx

`expect-jsx` API consists of four methods: `toEqualJSX, toNotEqualJSX, toIncludeJSX` and `toNotIncludeJSX`.

```javascript
expect(ReactComponent|JSX).toEqualJSX(ReactComponent|JSX)
expect(ReactComponent|JSX).toNotEqualJSX(ReactComponent|JSX)
expect(ReactComponent|JSX).toIncludeJSX(ReactComponent|JSX)
expect(ReactComponent|JSX).toNotIncludeJSX(ReactComponent|JSX)
```

example: 

```javascript
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

class TestComponent extends React.Component {}

describe('expect-jsx', () => {
  it('works', () => {
    expect(<div />).toEqualJSX(<div />);
    // ok

    expect(<div a="1" b="2" />).toEqualJSX(<div />);
    // Error: Expected '<div\n  a="1"\n  b="2"\n/>' to equal '<div />'

    expect(<span />).toNotEqualJSX(<div/>);
    // ok

    expect(<div><TestComponent /></div>).toIncludeJSX(<TestComponent />);
    // ok
  });
});
```

