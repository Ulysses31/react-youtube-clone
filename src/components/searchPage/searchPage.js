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
        image='https://yt3.ggpht.com/ytc/AAUvwngeFhbad271GYXz6oYUZJiypuNGNZiN5r4R_4cKW-A=s88-c-k-c0x00ffffff-no-rj'
        channel='Docker'
        verified
        subs='700K'
        noOfVideos='157'
        description='Docker helps developers bring their ideas to life by conquering the complexity of app development. For more information about Docker, visit www.docker.com...'
      />
      <hr />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Join us for our first ever Docker Community All-Hands. This one-hour event will bring together Docker staff, contributors and users to share business and product updates.'
        timestamp='50 minutes ago'
        channel='Docker'
        title='Docker Community All-Hands'
        image='https://i.ytimg.com/vi/-A9jp-R_mBc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBT8jpcWvF6HwhRNusWvdOvP3lHPg'
      />
      <VideoRow
        views='1M'
        subs='259K'
        description='From decades-old legacy applications to 1-month old greenfield apps, organizations are utilizing containers to increase portability...'
        timestamp='20 minutes ago'
        channel='Docker'
        title='Docker Tools for Modernizing Legacy Applications'
        image='https://i.ytimg.com/vi/pLjjCHaKQr0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlCcIJhwV2Kq79xLP24Yep8_vPeg'
      />
      <VideoRow
        views='2M'
        subs='445K'
        description='How to create apps and land your first client with Python in less than 90 days even if you have never written a line of code...'
        timestamp='10 minutes ago'
        channel='Docker'
        title='Docker + WebAssembly Meetup'
        image='https://i.ytimg.com/vi/FC2Rm4I_Tlo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIw2QBVKV2pXFIqCxJk-dQzHNfvw'
      />
      <VideoRow
        views='153K'
        subs='111K'
        description='Since the advent of AWS Lambda in 2014, the Function as a Service (FaaS) programming paradigm has gained a lot of traction in the cloud community...'
        timestamp='40 minutes ago'
        channel='Docker'
        title='Docker Containers in a Serverless World'
        image='https://i.ytimg.com/vi/Db4s9uFJ16Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVdp91b1f2Fmm2rBUAEWD9LN7Xtg'
      />
    </div>
  );
}

export default SeachPage;
