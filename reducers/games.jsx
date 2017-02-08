import { ADD_GAME, DELETE_GAME, EDIT_GAME, FETCH_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from '../constants/ActionTypes';

const initialState = {
  games : [],
  isLoading : false,
  error : null
  };

export default function games(state = initialState, action) {
  switch (action.type) {
  case ADD_GAME:
    return { games : [
      ...state.games,
      { id: state.games.reduce((maxId, game) => Math.max(game.id, maxId), -1) + 1,
       name: action.payload.name }
    ]
  };

  case DELETE_GAME:
    return state.filter(game =>
      game.id !== action.payload.id
    );

  case EDIT_GAME:
    return state.map(game =>
      game.id === action.payload.id ?
        Object.assign({}, game, { name: action.payload.name }) :
        game
    );

  case FETCH_GAMES:
    return { ...state, isLoading : true };

  case FETCH_GAMES_SUCCESS:
    return { games : action.payload.games, isLoading : false, error : null};

  case FETCH_GAMES_FAILURE:
    return { isLoading : false, error : action.payload.error };

  default:
    return state;
  }
}
