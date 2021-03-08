import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import { PropTypes } from 'prop-types';
import './channelRow.css';

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description
}) {
  return (
    <div className='channelRow'>
      <Avatar
        className='channelRow__logo'
        src={image}
        alt={image}
      />
      <div className='channelRow__text'>
        <h4>
          {channel} &nbsp;
          {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers &middot; {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;

// PropTypes
ChannelRow.propTypes = {
  image: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  subs: PropTypes.string.isRequired,
  noOfVideos: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
