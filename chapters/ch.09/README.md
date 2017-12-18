# Reusing test boilerplate
`Setting up a shallow renderer for each test can be redundant`, especially when trying to write similar tests that have slight tweaks. In this lesson, we go over how you can `reduce some of the overlapping code` so that each test only contains the unique pieces of the test.

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
  });

  it('should show the like count as active', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LikeCounter count={5} isActive={true}/>);
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

There are a few different ways we could go about cleaning up these tests, but what I'm going to do is go up above the test and create a new describe block that will wrap both of them. I'll call this group "is active" since we're testing the activity of this like counter component.

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
  });

  describe('isActive', () => {
    function renderLikeCounter(isActive){
      const renderer = new ShallowRenderer();
      renderer.render(<LikeCounter count={5} isActive={isActive}/>);
      return renderer.getRenderOutput().props.className.includes('LikeCounter--active');
    }
    it('should show the like count as active', () => {

      expect(renderLikeCounter(true)).toEqual(true);
    });

    it('should show the like count as active', () => {
      expect(renderLikeCounter(false)).toEqual(false);
    });
  });
});
```

As I mentioned, there are many different ways that you can do this. The main idea, the principle behind it, is to **take pieces that are repetitive in your test and to pull them out into reusable parts**.