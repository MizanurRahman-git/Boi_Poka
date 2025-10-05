import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router';

const Book = ({info}) => {

    const {author, bookName, category, image, rating, tags, yearOfPublishing, bookId} = info;
    
    return (
        <Link to={`/booksdetail/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='bg-gray-100 py-10 m-3 rounded-xl'>
    <img className='h-[166px]'
      src={image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <div className='flex gap-10'>
        {
            tags.map((tag , index) => <p key={index} className='bg-gray-100 font-medium text-center rounded-3xl text-[#23BE0A]'>{tag}</p>)
        }
    </div>
    <h2 className="card-title text-xl">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>By: {author} </p>
    <div className="flex items-center border-t-2 border-dotted pt-4">
      <p> Category: {category}</p>
      <div>
        <p className='flex items-center gap-1'>{rating} <IoMdStar/></p>
      </div>
    </div>
  </div>
        </div>
        </Link>
    );
};

export default Book;