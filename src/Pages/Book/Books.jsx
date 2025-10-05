import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({data}) => {

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Books</h1>
            <Suspense fallback={<h1>Loading....</h1>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map(info => <Book key={info.bookId} info={info}/>)
                }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;