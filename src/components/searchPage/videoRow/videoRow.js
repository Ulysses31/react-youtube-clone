import React from 'react';
import { PropTypes } from 'prop-types';
import './videoRow.css';

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image
}) {
  return (
    <div className='videoRow'>
      <img src={image} alt={image} />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} {subs} &middot; subscribers {views}{' '}
          views &middot; {timestamp}
        </p>
        <p className='videoRow__description'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;

// PropTypes
VideoRow.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
