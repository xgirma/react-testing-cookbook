# Intro to Shallow Rendering

In this lesson, we walk through how to use one of React's Test Utilities (from the `react-test-renderer/shallow`) called "Shallow Rendering". This lets us `render our React component one level deep` - _without a DOM_ - so that we can write tests for it. It works kind of like ReactDOM.render, where the `shallow renderer is a temporary place to "hold" your rendered component` so that you can assert things about its output. 

Tests written using the shallow renderer are **great for stateless or "dumb" components** that simply have their props passed to them from a parent container or "smart" component. These shallow renderer tests `work especially well with stateless function components`. 

They also work well for `"unit" tests` where you want to make sure your code works `in isolation`.

        npm i react-test-renderer
        
The first thing we need to do is `create a place to store the shallow-renderer`, so I'm going to say renderer, and then use the test `react-test-renderer/shallow`, and call the `render` method. So what's happened here is that **our renderer variable has become a temporary place where we can store the output** of our component. With the shallow-renderer `these components are only rendered one level deep` so you don't need a DOM, it just `gives you the object structure that you can assert` things about.

So now we can use this variable and call the render method on it, which `works in the same way ReactDOM.render works`, so we can pass in _coolComponent_ and give it a `greeting prop`, and now we can take a look at what this contains by calling the **renderer.render** method `renderer.render(<CoolComponent greeting={"hello world"}/>);`, and let's log that out so we can take a look at it. So now if I run my tests, we can see the object output of our shallow-renderer.
        
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
  it('should ...', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CoolComponent greeting={"hello world"}/>);
    const result = renderer.getRenderOutput();

    console.log(result)

  });
});
```

We have a `type, and key, ref, and props`, and more properties on this object here that we can use to write assertions for our tests. As you can see, this object `is only one level deep of our rendered output`. That makes writing unit tests a lot simpler because we only have to worry about the component, not the environment the component was rendered in.

```markdown
  cool component
{ '$$typeof': Symbol(react.element),
  type: 'div',
  key: null,
  ref: null,
  props: { children: [ [Object], [Object] ] },
  _owner: null,
  _store: {} }
```

### Footnote
The React team has **recommended** `composing the majority of your apps using these stateless "dumb" components`, so the majority of lessons in this course will focus on writing simple unit tests for these stateless components using Shallow Rendering. 

If you also want to write **tests for the stateful components** that are tied to different components and state and `can't be tested in isolation`, you may want to look at using a **DOM** (with something like **Karma** or **jsdom**) and React's other test utilities like **renderIntoDocument** and **Simulate**. 

However, I've found that it is helpful to try to compose most of your project with simple, isolated, stateless or "pure" components that can be unit tested with Shallow Rendering, and then wrap these components with a few stateful or "impure" components that you can either not worry about testing (what I do most of the time because it is difficult to test stateful components), or write separate integration and functional tests for them using different tools.