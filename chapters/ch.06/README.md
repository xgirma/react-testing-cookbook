# Testing element types with Shallow Rendering
When you render a component with the `Shallow Renderer`, you have `access to the underlying object`. We can write lots of useful tests to check that our components are working as expected. 

In this lesson, we will use the type property on the shallow rendered component to make sure that the root element is what we expect it to be.

Here we have an app that lets us add quotes, with their author, to a list of our favorite quotes, and then we can "like" and "unlike" those quotes. We'd like to write a test to make sure that this component that toggles "like" count is a link.

```javascript
import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'
import LikeCounter from'./LikeCounter';

describe('LikeCounter', () => {
  it('should be a link', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LikeCounter count={5}/>);
    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected);
  })
});
```
