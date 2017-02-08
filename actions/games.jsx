import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function addGame(name) {
  return { type: types.ADD_GAME, payload: { name: name} };
}

export function deleteGame(id) {
  return { type: types.DELETE_GAME, payload : { id: id} };
}

export function editGame(id, text) {
  return { type: types.EDIT_GAME, payload : { id: id, name: name} };
}

export function fetchGames() {
  return function (dispatch, getState) {
    dispatch({ type: types.FETCH_GAMES });

    return axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/game`,
      headers: []
    })
    .then((response) => dispatch(fetchGamesSuccess(response.data)))
    .catch((error) => dispatch(fetchGamesError(error)));
  };
}

export function fetchGamesSuccess(games) {
  return { type: types.FETCH_GAMES_SUCCESS, payload : { games: games } };
}

export function fetchGamesError(error) {
  return { type: types.FETCH_GAMES_ERROR, payload : { error: error } };
}
