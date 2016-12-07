import * as types from '../constants/ActionTypes';

export function addGame(name) {
  return { type: types.ADD_GAME, data: { name: name} };
}

export function deleteGame(id) {
  return { type: types.DELETE_GAME, data : { id: id} };
}

export function editGame(id, text) {
  return { type: types.EDIT_GAME, data : { id: id, name: name} };
}
