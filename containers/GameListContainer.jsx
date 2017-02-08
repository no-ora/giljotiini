import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameList from '../components/GameList';
import * as GameActions from '../actions/Games';

class GameListContainer extends Component {
componentDidMount() {
  this.props.gameActions.fetchGames();
}

  render() {
    const { games } = this.props;
    return (
      <div>
        <GameList games={ games }/>
      </div>
    );
  }
}

GameListContainer.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListContainer);
