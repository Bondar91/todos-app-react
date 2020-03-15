import types from 'actions/types';

const initialState = {
  todos: [],
  error: false,
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        isLoading: false,
      };
    case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        isLoading: false,
      };
    case types.ADD_TODOS_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case types.REMOVE_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.REMOVE_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos].filter(item => item !== action.todo),
        isLoading: false,
      };
    case types.REMOVE_TODOS_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
