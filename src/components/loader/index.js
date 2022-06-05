/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import {  StyleSheet ,View, ActivityIndicator } from 'react-native';
import { useMovies } from '../../helpers/tvShowsContext';

function Loader () {
    const MOVIES = useMovies();

    return MOVIES.loading ?
        <View style={[ styles.mainView, { marginVertical : 10 }]}>
            <ActivityIndicator size={25} color="#2c2c54"/>
        </View>
        :
        null;
}

export function FullScreenLoader () {
    return (
        <View style={[styles.mainView, styles.fullscreen]}>
            <ActivityIndicator size={50} color="#2c2c54"/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView : {
        flex : 1,
    },
    fullscreen : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f7f1e3',
    },
});

export default Loader;
