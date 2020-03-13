import types from 'actions/types';

export const todosFetchedSuccess = todos => ({
  type: types.FETCH_TODOS_SUCCESS,
  todos,
});

export const todosFetchedFailed = error => ({
  type: types.FETCH_TODOS_FAILED,
  error,
});
