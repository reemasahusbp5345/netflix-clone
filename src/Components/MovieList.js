import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold my-4'>{title}</h1>
            <div className='flex overflow-x-scroll scroll-smooth'>
                <div className='flex'>
                {movies?.map(movie=><MovieCard key={movie?.id} {...movie}/>)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;