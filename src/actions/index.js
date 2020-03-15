import types from 'actions/types';

export const todosFetchedRequested = () => ({
  type: types.FETCH_TODOS_REQUEST,
});

export const todosFetchedSuccess = todos => ({
  type: types.FETCH_TODOS_SUCCESS,
  todos,
});

export const todosFetchedFailed = error => ({
  type: types.FETCH_TODOS_FAILED,
  error,
});

export const todosAddRequested = todo => ({
  type: types.ADD_TODOS_REQUEST,
  todo,
});

export const todosAddSuccess = todo => ({
  type: types.ADD_TODOS_SUCCESS,
  todo,
});

export const todosAddFailed = error => ({
  type: types.ADD_TODOS_FAILED,
  error,
});

export const todosRemoveRequested = todo => ({
  type: types.REMOVE_TODOS_REQUEST,
  todo,
});

export const todosRemoveSuccess = todo => ({
  type: types.REMOVE_TODOS_SUCCESS,
  todo,
});

export const todosRemoveFailed = error => ({
  type: types.REMOVE_TODOS_FAILED,
  error,
});
