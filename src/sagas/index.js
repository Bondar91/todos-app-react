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

export default function* rootSaga() {
  yield all([requestFetchTodos()]);
}
