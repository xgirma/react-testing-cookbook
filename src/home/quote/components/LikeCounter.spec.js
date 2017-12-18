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