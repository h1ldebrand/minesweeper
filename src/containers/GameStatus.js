import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmojiStatus from '../components/EmojiStatus';
import {getGameStatus} from '../selectors';

const statusEmojis = {
    'LOOSER': 'dizzy-face',
    'WINNER': 'sunglasses',
    'PLAYING': 'smiley'
}

export default connect(
    mapStateToProps
)(EmojiStatus);

function mapStateToProps(state) {
    return {
        status: getGameStatus(state),
        mapper: statusEmojis
    }
}