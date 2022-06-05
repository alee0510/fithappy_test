/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import main navigation
import AppNavigation from './src/routes';

// import context provider
import TvShowsProvider from './src/helpers/tvShowsContext';
import TvShowDetailsProvider from './src/helpers/tvShowDetailsContext';

function App () {
    return (
        <TvShowsProvider>
            <TvShowDetailsProvider>
                <NavigationContainer>
                    <AppNavigation/>
                </NavigationContainer>
            </TvShowDetailsProvider>
        </TvShowsProvider>
    );
}

export default App;
