import React from 'react';

const DesktopNav = ({menuItems,Logo}) => {
    return (
        <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
            <a href='/'>
            <img src={Logo} alt="logo" /></a>
        </div>
    );
};

export default DesktopNav;