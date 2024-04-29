import React from 'react';
import GptSearch from './GptSearch';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptContainer = () => {
    return (
        <div>
            <GptSearch/>
            <GptMovieSuggestion/>
        </div>
    );
};

export default GptContainer;