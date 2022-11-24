import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <div className='min-h-screen animate-spin text-8xl flex justify-center items-center'>
            <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
        </div>
    );
};

export default Loading;