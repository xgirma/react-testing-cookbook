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

    console.log(result) // to see the result
  });

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