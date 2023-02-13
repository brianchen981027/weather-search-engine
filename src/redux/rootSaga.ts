import { all, fork } from 'redux-saga/effects';

import * as commonSagas from '@/Sagas/index';

export default function* rootSaga() {
  yield all([...Object.values(commonSagas)].map(fork));
}
