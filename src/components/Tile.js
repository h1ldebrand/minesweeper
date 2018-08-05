import React, { Component } from 'react';

import Emoji from './Emoji.js';

import './Tile.css';

const emojiNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class Tile extends Component {
    handleReveal = () => {
        const { id, isRevealed, onReveal } = this.props;

        if (!isRevealed) {
            onReveal(id)
        }
    }

    handleFlag = (e) => {
        e.preventDefault();

        const { id, onToggleFlagged } = this.props;

        onToggleFlagged(id)
    }

    getTileEmoji() {
        const { isMine, isRevealed, isFlagged, mineCount } = this.props;

        if (isFlagged) {
            return 'triangular-flag-on-post';
        }

        if (isMine && isRevealed) {
            return 'bomb';
        }

        if (isRevealed && mineCount) {
            return emojiNumbers[mineCount];
        }

        if (isRevealed && !mineCount) {
            return 'ghost';
        }

        return 'white-large-square';
    }

    render() {
        return (
            <span
                className="tile"
                onClick={this.handleReveal}
                onContextMenu={this.handleFlag}
            >
                <Emoji size={40} type={this.getTileEmoji()} />
            </span>
        );
    }
}
