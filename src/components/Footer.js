import React from 'react';

import MinesLeftCount from '../containers/MinesLeftCount.js';
import MovesCount from '../containers/MovesCount.js';
import GameTimer from '../containers/GameTimer.js';

import './Footer.css';

export default props => {
    const { status, mapper } = props;

    return (
        <div className="footer-base">
            <MinesLeftCount />
            <MovesCount />
            <GameTimer />
        </div>
    );
};
