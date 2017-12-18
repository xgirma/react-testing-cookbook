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