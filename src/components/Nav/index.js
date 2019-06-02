import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/movie">movie</Link>
                </li>
            </ul>
        </div>
    )
}
