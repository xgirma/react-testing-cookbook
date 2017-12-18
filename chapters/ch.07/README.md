# Testing className with Shallow Rendering
The React Shallow Renderer test utility lets us `inspect the output of a component one level deep`. In this lesson, we will examine the rendered output of props, specifically the `className prop`. We will then use the `ES2015 String.includes()` method to check that our rendered `className includes what we expect`.

```javascript
import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'
import Icon from './Icon'

describe('Icon', () => {
  it('should', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Icon name={"Facebook"}/>)
    const actual = renderer.getRenderOutput()
    console.log(actual)
  });
});
```
output
```markdown
  Icon
{ '$$typeof': Symbol(react.element),
  type: 'i',
  key: null,
  ref: null,
  props: { className: 'fa fa-Facebook', style: { fontSize: '1.5rem' } },
  _owner: null,
  _store: {} }

```

Now let's take a look at what this actual value is going to be. We can see here that the shallow renderer has given us our object representation of our component, so we have this object here. But what we're really interested in is this `className prop right here`.

```javascript
import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'
import Icon from './Icon'

describe('Icon', () => {
  it('should', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Icon name={"Facebook"}/>)
    const actual = renderer.getRenderOutput().props.className.includes('facebook')
    // console.log(actual)
    expect(actual).toEqual(true)
  });
});
```
