import React from 'react';
import { PropTypes } from 'prop-types';

function SidebarRow({ Icon, title, selected }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className='sidebarRow__icon' />
      <h4 className='sidebarRow__title'>{title}</h4>
    </div>
  );
}

export default SidebarRow;

// PropTypes
SidebarRow.propTypes = {
  Icon: PropTypes.obj,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};
