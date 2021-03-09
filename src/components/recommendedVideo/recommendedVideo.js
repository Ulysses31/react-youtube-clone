import React from 'react';
import VideoCard from './videoCard/videoCard';
import './recommendedVideo.css';

function RecommendedVideo() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='Node.js Build WG meeting'
          views='76 Views'
          timestamp='12 days ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwniVxwLLMJFiJG-kLw_i2rYSPoWMEjC9XQm38co_FQ=s48-c-k-c0x00ffffff-no-rj'
          channel='node.js'
          image='https://i.ytimg.com/vi/Cy_zrjLDvas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlpCmx8uUoyMbHOWVBLLtkeyJ7Xw'
        />
        <VideoCard
          title='Technical Steering Committee meeting'
          views='1M Views'
          timestamp='30 days ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwniVxwLLMJFiJG-kLw_i2rYSPoWMEjC9XQm38co_FQ=s48-c-k-c0x00ffffff-no-rj'
          channel='node.js'
          image='https://i.ytimg.com/vi/VL81-HzFCH8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuIE26pNP3xxKRYTVI77nSIbKGqA'
        />
        <VideoCard
          title='Node.js N-API Team meeting'
          views='5M Views'
          timestamp='12 day ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwniVxwLLMJFiJG-kLw_i2rYSPoWMEjC9XQm38co_FQ=s48-c-k-c0x00ffffff-no-rj'
          channel='node.js'
          image='https://i.ytimg.com/vi/FLZRDbQnNoc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMtN5l03rGusUU3PYMEavjHDj0gQ'
        />
        <VideoCard
          title='Node.js Diagnostics Working Group Meeting'
          views='5.2M Views'
          timestamp='10 day ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwniVxwLLMJFiJG-kLw_i2rYSPoWMEjC9XQm38co_FQ=s48-c-k-c0x00ffffff-no-rj'
          channel='node.js'
          image='https://i.ytimg.com/vi/hFEsQ35B0kA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJR_Hq18pzl9r-JuMjGaHrVa64LQ'
        />
        <VideoCard
          title='AngularJS MTV Meetup: Best Practices'
          views='2.2M Views'
          timestamp='20 day ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwnh_wi2DL04IADxmFyvz77IyzMEip-75ytlBGuG2=s48-c-k-c0x00ffffff-no-rj'
          channel='Angular'
          image='https://i.ytimg.com/vi/ZhfUv0spHCY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC03vJO_Tseqav7dFpEhG9kNmfygg'
        />
        <VideoCard
          title='Introduction to AngularJS'
          views='2.3M Views'
          timestamp='3 days ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwnh_wi2DL04IADxmFyvz77IyzMEip-75ytlBGuG2=s48-c-k-c0x00ffffff-no-rj'
          channel='Angular'
          image='https://i.ytimg.com/vi/k4qVkWh1EAo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARUZgn4ujmXGNMOTaSlXeTN5OqSw'
        />
        <VideoCard
          title='[Debugging] Expression has changed after it was checked'
          views='1M Views'
          timestamp='13 days ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwnh_wi2DL04IADxmFyvz77IyzMEip-75ytlBGuG2=s48-c-k-c0x00ffffff-no-rj'
          channel='Angular'
          image='https://i.ytimg.com/vi/O47uUnJjbJc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSenjxKyUvnVjKbokazxVVygWyZw'
        />
        <VideoCard
          title='[Debugging] Multiple components match node with tag name {element}'
          views='1.5M Views'
          timestamp='1 day ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwnh_wi2DL04IADxmFyvz77IyzMEip-75ytlBGuG2=s48-c-k-c0x00ffffff-no-rj'
          channel='Angular'
          image='https://i.ytimg.com/vi/z_3Z5mOm59I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5mSlXblkVC9o_F58CNGMWT8-2Uw'
        />
        <VideoCard
          title='Login with Email (JWT) + Google OAuth Authentication | React, Node, Express, MongoDB'
          views='5.2M Views'
          timestamp='10 day ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwnheg2Wwh32lkbWjsqqysqh0fe6-WU_BMn4Qh0FIFg=s48-c-k-c0x00ffffff-no-rj'
          channel='Javscript Mastery'
          image='https://i.ytimg.com/vi/LKlO8vLvUao/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAupFScFP8iK7xjCRrKDjeYKPJY6w'
        />
        <VideoCard
          title='Build and Deploy a React PWA - Why Progressive Web Apps are the Future of the Web'
          views='2.2M Views'
          timestamp='20 day ago'
          channelImage='https://yt3.ggpht.com/ytc/AAUvwnheg2Wwh32lkbWjsqqysqh0fe6-WU_BMn4Qh0FIFg=s48-c-k-c0x00ffffff-no-rj'
          channel='Javscript Mastery'
          image='https://i.ytimg.com/vi/IaJqMcOMuDM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyrl6yUfaYGj71gc-lJ-3yPWQJ0Q'
        />
      </div>
    </div>
  );
}

export default RecommendedVideo;
