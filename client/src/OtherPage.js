import React from 'react';
import { Link } from 'react-router-dom';

const tasks = () => {
    return (
        <div>
            <p>
            Im some other page manh
            </p>
            <Link to="/">Go back home</Link>
        </div>
    )
}

export default tasks;