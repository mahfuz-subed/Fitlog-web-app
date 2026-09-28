import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-around item-center'>
            <h2 className='text-xxl font-bold text-white'>Hold tight. The data is being loaded. <span className="loading text-white loading-lg"></span></h2>
        </div>
    );
};

export default Loading;