import types from 'actions/types';

const initialState = {
  todos: [],
  error: false,
  errorMsg: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.todos],
      };
    case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        error: true,
        errorMsg: action.error.response,
      };
    default:
      return state;
  }
};

export default rootReducer;
