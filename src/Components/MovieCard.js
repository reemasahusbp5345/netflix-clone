import React from 'react';
import { POSTER_URL } from '../Utils/constatnts';

const MovieCard = ({poster_path}) => {
    return (
        <div className='w-36 m-2'>
            <img  src={POSTER_URL+poster_path} alt="poster"/>
        </div>
    );
};

export default MovieCard;