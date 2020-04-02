import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actions from 'actions';
import types from 'actions/types';
import axios from 'axios';

export function* getTodos() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10',
    );
    const todos = yield response.data;
    yield put(actions.todosFetchedSuccess(todos));
  } catch (e) {
    yield put(actions.todosFetchedFailed(e));
  }
}

export function* requestFetchTodos() {
  yield takeEvery(types.FETCH_TODOS_REQUEST, getTodos);
}

export function* addTodos({ todo }) {
  try {
    const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      userId: todo.userId,
      title: todo.title,
      completed: todo.completed,
    });
    const todos = yield response.data;
    yield put(actions.todosAddSuccess(todos));
  } catch (e) {
    yield put(actions.todosAddFailed(e));
  }
}

export function* requestAddTodo() {
  yield takeEvery(types.ADD_TODOS_REQUEST, addTodos);
}

export function* removeTodos({ todo }) {
  try {
    // console.log(todo);
    if (todo.completed !== true) {
      yield call(axios.delete, `https://jsonplaceholder.typicode.com/todos/${todo.id}`);
      yield put(actions.todosRemoveSuccess(todo.id));
    } else {
      console.log('Task cannot be deleted!!! Task is completed!!');
      yield put(actions.todosRemoveFailed());
    }
  } catch (e) {
    yield put(actions.todosRemoveFailed(e));
  }
}

export function* requestRemoveTodo() {
  yield takeEvery(types.REMOVE_TODOS_REQUEST, removeTodos);
}

export default function* rootSaga() {
  yield all([requestFetchTodos(), requestAddTodo(), requestRemoveTodo()]);
}
