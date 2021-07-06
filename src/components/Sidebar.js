import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="logo">
                <h1>SKOTE</h1>
            </div>
            <div className="menu"><h3>MENU</h3></div>
            <div className="dash">
                
                <p>Dashboards</p>
                <ul className="dash-menu">
                    <li><a href="/">Default</a></li>
                    <li><a href="/">Saas</a></li>
                    <li><a href="/">Crypto</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </div>
            <div className="menu"><p>APPS</p></div>
            <div className='options'>
                <ul className="options-ul">
                    <li>Calender</li>
                    <li>Chat</li>
                    <li>File Manager</li>
                    <li>Ecommerce</li>
                    <li>Crypto</li>
                    <li>Email</li>
                </ul>
            </div>


            
        </>
    )
}

export default Sidebar;
