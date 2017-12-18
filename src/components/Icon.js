import React from 'react';
import {FONT_SIZE_LARGE} from '../utilities/styleGuide';
import PropTypes from 'prop-types';

const Icon = ({name}) => {
  return (
    <i
      className={`fa fa-${name}`}
      style={{fontSize: FONT_SIZE_LARGE}}
    >
    </i>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
