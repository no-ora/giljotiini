import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem } from 'material-ui';

class GameItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { game } = this.props;
    return (
      <div>
        <ListItem primaryText={game.name}/>
      </div>
    );
  }
}

GameItem.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameItem;
