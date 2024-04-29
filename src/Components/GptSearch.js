import React from 'react';

const GptSearch = () => {
    return (
        <div>
            <form className='bg-black text-white w-1/2 m-auto flex'>
                <input className='w-2/3 m-2 p-2' type='text' placeholder='What you want to watch today?'/>
                <button className='bg-red-700 w-1/3 font-bold m-2 rounded-lg'>Search</button>
            </form>
        </div>
    );
};

export default GptSearch;