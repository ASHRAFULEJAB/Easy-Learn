import React from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Link to='/'></Link>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Root;