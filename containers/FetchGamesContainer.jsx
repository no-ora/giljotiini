import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/games';

class FetchGamesContainer extends Component {
  render() {
    const { gameActions } = this.props;
    return (
      <div>
        <button onClick ={ gameActions.fetchGames }/>
      </div>
    );
  }
}

FetchGamesContainer.propTypes = {
  gameActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {

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
)(FetchGamesContainer);
