import React from 'react';
import { Avatar } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import './videoCard.css';

function VideoCard({
  image,
  title,
  channel,
  channelImage,
  views,
  timestamp
}) {
  return (
    <div className='videoCard'>
      <img
        className='videoCard__thumbnail'
        src={image}
        alt={image}
      />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={channelImage}
          src={channelImage}
        />
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} &middot; {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

// PropTypes
VideoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  channelImage: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
};
