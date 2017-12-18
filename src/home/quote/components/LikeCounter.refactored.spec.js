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