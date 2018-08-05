import React from 'react';

import Emoji from './Emoji.js';

import './App.css';

export default props => (
    <div className="app-base">
        <h1>
            <Emoji type="collision" />
        </h1>
        {props.children}
    </div>
);
