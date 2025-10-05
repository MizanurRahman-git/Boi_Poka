import React from 'react';

const ReadBook = ({Read}) => {

    const {author, bookName, category, image, publisher, totalPages, rating} = Read;

    return (
        <div className='flex items-center border-1 border-gray-300 p-3 rounded-2xl my-3 gap-4'>
            <div>
                <img className='w-[166px] h-[250px] object-cover' src={image} alt="Book" />
            </div>
            <div>
                <h1>{bookName}</h1>
                <p> by: {author}</p>
                <p> Rating: {rating}</p>
                <p> Publisher: {publisher}</p>
                <p> Page: {totalPages}</p>
                <p className='border-t-1 border-dashed mt-3 py-2'> Category: {category}</p>
            </div>
        </div>
    );
};

export default ReadBook;