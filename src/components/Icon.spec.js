import React from 'react'
import expect from 'expect'
import ShallowRenderer from 'react-test-renderer/shallow'
import Icon from './Icon'

describe('Icon', () => {
  it('should', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Icon name={"facebook"}/>)
    // const actual = renderer.getRenderOutput()
    // console.log(actual)
    const actual = renderer.getRenderOutput().props.className.includes('fa-facebook');
    expect(actual).toEqual(true)
  });
});
