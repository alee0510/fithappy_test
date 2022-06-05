/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import Card from '../../components/card';
import Loader from '../../components/loader';
import Header from '../../components/header';

// import context data
import {
    useLoadMoreMovies,
    useMovies,
    UPDATE_DATA,
} from '../../helpers/tvShowsContext';

// styles
import styles from './styles';

function HomeScreen ({ navigation }) {
    const shows = useMovies();
    const dispatch = useLoadMoreMovies();

    return (
        <View style={{ flex : 1, backgroundColor : '#d1ccc0' }}>
            <StatusBar backgroundColor={'#2c2c54'}/>
            <Header/>
            <FlatList
                data={shows.data}
                keyExtractor={ item => item.id }
                contentContainerStyle={styles.listStyle}
                renderItem={({ item }) => <Card tvshow={item} navigation={ navigation }/>}
                ListFooterComponent={Loader}
                onEndReached={ _ => dispatch({ type : UPDATE_DATA })}
                onEndReachedThreshold={0.7}
            />
        </View>
    );
}

export default HomeScreen;
