import React from 'react';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import RestoreSharpIcon from '@material-ui/icons/RestoreSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SidebarRow from './sidebarRow';
import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title='Home' />
      <SidebarRow
        Icon={WhatshotSharpIcon}
        title='Trending'
      />
      <SidebarRow
        Icon={SubscriptionsSharpIcon}
        title='Subscription'
      />
      <hr />
      <SidebarRow
        Icon={VideoLibrarySharpIcon}
        title='Library'
      />
      <SidebarRow Icon={RestoreSharpIcon} title='History' />
      <SidebarRow
        Icon={OndemandVideoSharpIcon}
        title='Your videos'
      />
      <SidebarRow
        Icon={WatchLaterSharpIcon}
        title='Watch Later'
      />
      <SidebarRow
        Icon={ThumbUpAltOutlinedIcon}
        title='Liked Videos'
      />
      <SidebarRow
        Icon={ExpandMoreSharpIcon}
        title='Show more'
      />
    </div>
  );
}

export default Sidebar;
