import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import {
  FETCH_TVS,
} from './constants';
import {
  setTvsAction
} from './actions';

function* fetchTvs(action) {
  try {
    const resp = yield api.tv.fetchTvs();
    yield put(setTvsAction(resp.data.results));
  } catch (e) {
    if (action.onFail) action.onFail();
    yield put(setTvsAction([]));
  }
}

function* watchFetchTvs() {
  yield takeLeading(FETCH_TVS, fetchTvs);
}

export const tvSagas = [
  watchFetchTvs()
];
