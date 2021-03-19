import { takeLatest, put, call } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import {
    requestData
} from '../actions/userActions';

function* getData(action) {
    try {
    const APIObj = {
        endPoint: `https://newsapi.org/v2/everything?q=tesla&from=2021-02-19&sortBy=publishedAt&apiKey=5626f7f62fdb41158739043323ef64b0`,
        method: 'GET'
    };
    var apiResult = yield ApiService.callApi(APIObj);
}
catch (error) {
    //
    //
  }
}
export default [
  takeLatest(actionTypes.GET_THE_DATA, getData),
];