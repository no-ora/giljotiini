import { ADD_GAME, DELETE_GAME, EDIT_GAME } from '../constants/ActionTypes';

const initialState = {
  games : [{id: 0, name: "Nooran peli"}]
  };

export default function games(state = initialState, action) {
  switch (action.type) {
  case ADD_GAME:
    return { games : [
      ...state.games,
      { id: state.reduce((maxId, game) => Math.max(game.id, maxId), -1) + 1,
       name: action.data.name }
    ]
  };

  case DELETE_GAME:
    return state.filter(game =>
      game.id !== action.data.id
    );

  case EDIT_GAME:
    return state.map(game =>
      game.id === action.data.id ?
        Object.assign({}, game, { name: action.data.name }) :
        game
    );

  default:
    return state;
  }
}
