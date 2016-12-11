import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameList from '../components/GameList';

class GameListContainer extends Component {
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

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListContainer);
