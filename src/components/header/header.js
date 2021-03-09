import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
            alt='youtube'
          />
        </Link>
      </div>

      <div className='header__input'>
        <input
          placeholder='Search'
          type='text'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          title='Press the search button to navigate to search page.'
        />
        <Link
          to={`/search/${inputSearch}`}
          className='header__inputButton'
        >
          <SearchIcon
            style={{ margin: '5px 0px 0px 12px' }}
          />
        </Link>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icons__icon' />
        <AppsIcon className='header__icons__icon' />
        <NotificationsIcon className='header__icons__icon' />
        <Avatar
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrCNzBlPnVIER2Jyfb6iv90_yKSSGovtaCw&usqp=CAU'
          className='header__icons__icon'
        />
      </div>
    </div>
  );
}

export default Header;
