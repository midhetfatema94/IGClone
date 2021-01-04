import React, { Component } from 'react';
import { API_LOADING, API_FAILURE, API_SUCCESS, TOKEN_CHANGED } from './types';
import { data } from '../reducers/IgDataList.json';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const callWebService = (token) => {
    console.log("service success 1", token);
    return (dispatch) => {
        dispatch(serviceLoading())
        // axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token="+token)
        // axios.get("./reducers/IgDataList.json")
        // .then(response => {
            console.log("response", data)
            dispatch(serviceSuccess(data))
            Actions.showList();
        // })
        // .catch(error => dispatch(serviceFailure(error)));
    }
};

const serviceLoading = () => ({
    type: API_LOADING
})

const serviceSuccess = (data) => ({
    type: API_SUCCESS,
    payload: data
})

const serviceFailure = (error) => ({
    type: API_FAILURE,
    payload: error
})

export const tokenChanged = (text) => {
    console.log("changing token", text)
    return {
        type: TOKEN_CHANGED,
        payload: text
    };
};