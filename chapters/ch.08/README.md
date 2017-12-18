# Testing conditional className with Shallow Rendering
Often our components have output that shows differently depending on the props it is given; in this lesson, we go over how to compare the className prop element tree output based on conditional input.

Here we have an app that lets us add quotes to a list and then like and unlike those quotes. We like to `test that the className gets applied correctly based on the conditions of this like counter component here`.

```javascript
import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'
import LikeCounter from'./LikeCounter';

describe('LikeCounter', () => {
  it('should show the like count as active', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LikeCounter count={5} isActive={true}/>);
    const actual = renderer.getRenderOutput()
    console.log(actual)
  });
});
```

output:
```markdown
{ '$$typeof': Symbol(react.element),
  type: 'a',
  key: null,
  ref: null,
  props: 
   { className: 'LikeCounter LikeCounter--active',
     style: { color: undefined },
     onClick: undefined,
     children: 
      { '$$typeof': Symbol(react.element),
        type: 'div',
        key: null,
        ref: null,
        props: [Object],
        _owner: null,
        _store: {} } },
  _owner: null,
  _store: {} }

```

```javascript
import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'
import LikeCounter from'./LikeCounter';

describe('LikeCounter', () => {
  it('should show the like count as active', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LikeCounter count={5} isActive={true}/>);
    // const actual = renderer.getRenderOutput()
    // console.log(actual)
    const actual = renderer.getRenderOutput().props.className.includes('LikeCounter--active');
    expect(actual).toEqual(true);
  });

  it('should show the like count as active', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LikeCounter count={5} isActive={false}/>);
    const actual = renderer.getRenderOutput().props.className.includes('LikeCounter--active');
    expect(actual).toEqual(false);
  });
});
```
