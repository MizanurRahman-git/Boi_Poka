import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <div className='space-y-8'>
                <h1 className='text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='border-1 p-2'>View The List</button>
            </div>
            <div>
                <img className='rounded-2xl' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;