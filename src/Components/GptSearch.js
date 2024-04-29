import React from 'react';
import langConstants from '../Utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearch = () => {
    const lang=useSelector(store=>store?.lang?.lang);

    return (
        <div>
            <form className='bg-black text-white w-1/2 m-auto flex'>
                <input className='w-2/3 m-2 p-2' type='text' placeholder={langConstants[lang]?.searchPlaceholder}/>
                <button className='bg-red-700 w-1/3 font-bold m-2 rounded-lg'>{langConstants[lang]?.search}</button>
            </form>
        </div>
    );
};

export default GptSearch;