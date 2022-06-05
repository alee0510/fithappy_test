/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useReducer } from 'react';
import { API_KEY } from '@env';
import api from '../services';

// initialize value
const INITIAL_STATE = {
    backdrop_path : '',
    poster_path : '',
    overview : '',
    name : '',
    number_of_episodes : '',
    number_of_seasons : '',
    first_air_date : '',
    popularity : '',
    seasons : [],
    loading : false,
};

// define actions
export const START_GET_SHOW_DATA = 'START_GET_SHOW_DATA';
export const END_GET_SHOW_DATA = 'END_GET_SHOW_DATA';
export const GET_SHOW_DATA = 'GET_SHOW_DATA';

// define reducer
const tvShowDetailsReducer = (state, action) => {
    switch (action.type) {
        case START_GET_SHOW_DATA :
            return { ...state, loading : true };
        case END_GET_SHOW_DATA :
            return { ...state, loading : false };
        case GET_SHOW_DATA :
            return {
                ...state,
                seasons : action.payload.seasons,
                overview : action.payload.overview,
                name : action.payload.name,
                backdrop_path : action.payload.backdrop_path,
                poster_path : action.payload.poster_path,
                number_of_episodes : action.payload.number_of_episodes,
                number_of_seasons : action.payload.number_of_seasons,
                popularity : action.payload.popularity,
                first_air_date : action.payload.first_air_date,
            };
        default :
            return state;
    }
};

// initialize context
const TvShowDetailsContext = createContext();
const TvShowDetailsUpdateContext = createContext();

// initialize useContext
export const useTvShowDetails = _ => useContext(TvShowDetailsContext);
export const useUpdateTvShowDetails = _ => useContext(TvShowDetailsUpdateContext);

// define provider
export default function TvShowDetaisProvider ({ children }) {
    const [ state, dispatch ] = useReducer(tvShowDetailsReducer, INITIAL_STATE);

    const fetchData = async id => {
        try {
            dispatch({ type : START_GET_SHOW_DATA });

            const { data } = await api.get(`/tv/${id}?api_key=${API_KEY}`);
            dispatch({
                type : GET_SHOW_DATA,
                payload : {
                    seasons : data.seasons,
                    name : data.name,
                    overview : data.overview,
                    backdrop_path : data.backdrop_path,
                    poster_path : data.poster_path,
                    number_of_episodes : data.number_of_episodes,
                    number_of_seasons : data.number_of_seasons,
                    popularity : data.popularity,
                    first_air_date : data.first_air_date,
                },
            });

            dispatch({ type : END_GET_SHOW_DATA});
        } catch (error) {
            console.log(error);
            dispatch({ type : END_GET_SHOW_DATA });
        }
    };

    return (
        <TvShowDetailsContext.Provider value={state}>
            <TvShowDetailsUpdateContext.Provider value={fetchData}>
                { children }
            </TvShowDetailsUpdateContext.Provider>
        </TvShowDetailsContext.Provider>
    );
}
