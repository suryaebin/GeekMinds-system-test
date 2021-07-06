import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import FlagIcon from '@material-ui/icons/Flag';
import CropFreeIcon from '@material-ui/icons/CropFree';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import FaceIcon from '@material-ui/icons/Face';




const Navbar = () => {

    return (
        <div className="topnav">
            <div className="left-nav">
                
                <div className="left">
                    <MenuIcon/> 
                    <input type="text" placeholder="Search..." />
                    <a href="/">Mega Menu</a>
                
                </div>
                
            </div>
            <div className="right-nav">
                <div className='right'>
                    <FlagIcon/>
                    <CropFreeIcon/>
                    <NotificationsNoneIcon/>
                    <FaceIcon/>
                    <span>admin</span>
                    <SettingsIcon/>
                </div>
                

            </div>
            
            
        </div>
    )
}

export default Navbar;
