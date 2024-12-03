import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = ({menuItems,Logo}) => {
    return (
        <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
            <a href='/'>
            <img src={Logo} alt="logo" /></a>
            <ul className='flex gap-7'>
                {
                    menuItems?.map((menu,index)=>(
                        <li key={index}>
                            <Link to='/' className='font-medium capitalize text-secondary'>{menu}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DesktopNav;