import React from 'react';

const Card = ({item}) => {
    return (
        <div className='container mx-auto flex justify-center md:justify-center'>
            <div className='max-w-sm '>
                <div>
                    <img src={item?.thumbnail_image} alt="thumbnail_image" />
                </div>
            </div>
        </div>
    );
};

export default Card;