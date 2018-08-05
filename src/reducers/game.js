import {fromJS} from 'immutable';

import {
    START_GAME,
    REVEAL_TILE,
    TOGGLE_FLAGGED_TILE
} from '../actions';

import {startGame, defaultGameState, revealTile, flagTile} from '../utils/minesweeper';

export default (state = defaultGameState, action) => {

    switch (action.type){

        case START_GAME : {
            const { cols, rows, mines } = action;
            return startGame({cols, rows, mines})
        }

        case REVEAL_TILE : {
            return revealTile(state, action.tileId);
        }

        case TOGGLE_FLAGGED_TILE : {
            return flagTile(state, action.tileId);
        }

        default : {
            return state;
        }
    }
};
