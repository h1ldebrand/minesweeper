import React, {Component} from 'react';
import {connect} from 'react-redux';

import GameStateItems from '../components/GameStatItem';

import {getMinesLeftCount} from '../selectors';

export default connect(mapStateToProps)(GameStateItems);

function mapStateToProps(state, ownProps) {
    return {
        stat: getMinesLeftCount(state),
        label: 'Mines left'
    }
}