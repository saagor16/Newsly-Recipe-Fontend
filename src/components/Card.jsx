import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
        <div className='container mx-auto flex justify-center md:justify-center'>
            <div className='max-w-sm '>
                <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>
                    <img src={item?.thumbnail_image} alt="thumbnail_image" className='rounded-t-lg'/>
                    <div className='py-6 px-5 rounded-lg bg-white'>
                        <Link to={`/item/${item._id}`}>
                        <h1 className='text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer'>{item?.name}</h1>
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;