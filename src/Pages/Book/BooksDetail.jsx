import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BooksDetail = () => {

    const {id} = useParams();

    const data = useLoaderData()

    const singleBook = data.find(book => book.bookId == id)

    console.log(singleBook)

    const {author, bookName, category, image, rating, tags, yearOfPublishing, review, publisher, totalPages} =singleBook

    return (
        <div className='flex justify-between gap-8 my-9'>
            <div className='bg-gray-100 w-[100%] flex justify-center items-center rounded-2xl'>
                <img className='w-[350px] ' src={image} alt="" />
            </div>
            <div className='space-y-5 w-[100%]'>
                <h1 className='font-bold text-[40px]'>{bookName}</h1>
                <p className='font-medium text-[20px] text-[#131313a7]'>By :  {author}</p>
                <p className='font-medium text-[#131313a7] text-[20px] border-t-1 border-b-1 border-gray-300 py-1'>{category}</p>
                <p><span className='font-bold'>Review:</span> {review}</p>
                <div className='flex gap-4'>
                    <h2 className='font-bold'>Tag</h2>
                    {
                    tags.map((tag , index) => <p key={index}  className='bg-gray-100 font-medium text-center rounded-3xl px-4 py-0.5 text-[#23BE0A]'>{tag}</p>)
                    }
                </div>
                <p className='flex gap-40 border-t-1 border-gray-300 pt-7'>Number of Page:<span className='font-semibold'>{totalPages}</span></p>

                <p className='flex gap-53'>Publisher:<span className='font-semibold'>{publisher}</span></p>

                <p className='flex gap-38'>Year of Publishing:<span className='font-semibold'>{yearOfPublishing}</span></p>

                <p className='flex gap-59'>Rating:<span className='font-semibold'>{rating}</span></p>
                <div className=' flex gap-3'>
                    <button className='font-semibold text-[18px] border-2 border-gray-200 py-2 px-4 rounded-xl'>Read</button>
                    <button className='font-semibold text-[18px] text-white bg-[#50B1C9] py-2 px-4 rounded-xl'>wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetail;