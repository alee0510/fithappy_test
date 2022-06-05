/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { API_KEY } from '@env';
import api from '../services';

// initial value
const INITIAL_STATE = {
    page : 1,
    data : [],
    loading : false,
};

// define actions
export const START_GET_DATA = 'START_GET_DATA';
export const END_GET_DATA = 'END_GET_DATA';
export const GET_DATA = 'GET_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

// define reducer
const tvShowsReducer = ( state, action) => {
    switch (action.type) {
        case START_GET_DATA:
            return { ...state, loading : true };
        case END_GET_DATA:
            return { ...state, loading : false };
        case GET_DATA:
            return {
                ...state,
                data : [ ...state.data, ...action.payload.results],
            };
        case UPDATE_DATA:
            return {
                ...state,
                page : state.page + 1,
            };
        default :
            return state;
    }
};

// initialize context
const TvShowsContext = createContext();
const TvShowsContextUpdate = createContext();

// initialize useContext
export const useMovies = _ => useContext(TvShowsContext);
export const useLoadMoreMovies = _ => useContext(TvShowsContextUpdate);

// define provider
export default function TvShowsProvider ({ children }) {
    const [ state, dispatch] = useReducer(tvShowsReducer, INITIAL_STATE);

    useEffect( _ => {
        async function fecthData() {
            try {
                dispatch({ type : START_GET_DATA });

                const { data } = await api.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${state.page}`);
                dispatch({ type : GET_DATA, payload : data });

                dispatch({ type : END_GET_DATA});

            } catch (error) {
                console.log(error);
                dispatch({ type : END_GET_DATA });
            }
        }

        fecthData();
    }, [state.page]);

    return (
        <TvShowsContext.Provider value={state}>
            <TvShowsContextUpdate.Provider value={dispatch}>
                { children }
            </TvShowsContextUpdate.Provider>
        </TvShowsContext.Provider>
    );
}
