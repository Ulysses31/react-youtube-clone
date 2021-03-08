import React from 'react';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from './channelRow/channelRow';
import VideoRow from './videoRow/videoRow';
import './searchPage.css';

function SeachPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneSharpIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj'
        channel='Clever Programmer'
        verified
        subs='700K'
        noOfVideos='157'
        description='You can find awesome programming lessons here! Also,
      expect programming tips and tricks that will take
      your coding skills to the...'
      />
      <hr />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training.'
        timestamp='50 minutes ago'
        channel='Clever Programmer'
        title="Let's Build a YouTube Clone with REACT JS for Beginners"
        image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideoRow
        views='1M'
        subs='259K'
        description='Join the 3-part epic masterclass that shows you how to become a 6-figure developer...'
        timestamp='20 minutes ago'
        channel='Clever Programmer'
        title='Python Tutorial for Beginners - Full Course in 11 Hours [2020]'
        image='https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSS_whh1c8afowdYOkUZmGsgF6tQ'
      />
      <VideoRow
        views='2M'
        subs='445K'
        description='How to create apps and land your first client with Python in less than 90 days even if you have never written a line of code...'
        timestamp='10 minutes ago'
        channel='Clever Programmer'
        title='Top 5 Programming Languages to Learn to Get a Job Without a College Degree'
        image='https://i.ytimg.com/vi/f3EbDbm8XqY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCed0w3pe02k0AE2a_bkRz_Au3mKw'
      />
      <VideoRow
        views='153K'
        subs='111K'
        description='Do you want to become a 6-figure developer with Python? Check out the best Python course on the planet...'
        timestamp='40 minutes ago'
        channel='Clever Programmer'
        title='Python AI Tutorial-Full Course for Beginners in 9 Hours'
        image='https://i.ytimg.com/vi/XIrOM9oP3pA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASAohELB0k00Xm8aA57elXJpTq-Q'
      />
    </div>
  );
}

export default SeachPage;
