import React from 'react';
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>VitorAdmin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src='https://yt3.ggpht.com/ytc/AKedOLQHycxmUIxpRj3W-HFYv7oqg0cuynEYr9alctE7=s48-c-k-c0x00ffffff-no-rj' alt='' className='topAvatar' />
                </div>
            </div>
        </div>
    )
}

export default Topbar