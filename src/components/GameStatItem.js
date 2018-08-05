import React from 'react';

import './GameStatItem.css';

export default props => {
    const { label, stat } = props;

    return (
        <div className="game-stat-base">
            <div className="game-stat-stat">{stat}</div>
            <div className="game-stat-label">{label}</div>
        </div>
    );
};
