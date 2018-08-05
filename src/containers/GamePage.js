import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';
import Footer from '../components/Footer'

class Game extends Component{

    componentDidMount(){
        this.props.startGame()
    }

    render(){

        return(
            <div>
                <GameStatus />
                <GameBoard />
                <Footer />
            </div>
        )
    }

}



export default connect(null, actions)(Game);