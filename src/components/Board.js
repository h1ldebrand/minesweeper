import React from 'react';

import Tile from './Tile.js';

import './Board.css';

export default props => {
    const { rows, onReveal, onToggleFlagged } = props;

    return (

        <div className="board-base">
            {
                rows.map((row, idx) =>
                    <div key={idx} className="board-row">
                        {
                            row.map(tile =>
                                <Tile
                                    key={tile.get('id')}
                                    id={tile.get('id')}
                                    mineCount={tile.get('mineCount')}
                                    isMine={tile.get('isMine')}
                                    isRevealed={tile.get('isRevealed')}
                                    isFlagged={tile.get('isFlagged')}
                                    onReveal={onReveal}
                                    onToggleFlagged={onToggleFlagged}
                                />
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};
