import types from 'actions/types';

const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ],
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
