/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import { FullScreenLoader } from '../../components/loader';
import { SeasonCard } from '../../components/card';
import ContentBackDrop from '../../components/content-backdrop';

// context
import { useTvShowDetails, useUpdateTvShowDetails } from '../../helpers/tvShowDetailsContext';

// styles
import styles from './styles';

function DetailScreen ({ navigation, route }) {
    const tvShowDetails = useTvShowDetails();
    const fetchData = useUpdateTvShowDetails();

    useEffect( _ => {
        fetchData(route.params.id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goBack = _ => navigation.goBack();

    return tvShowDetails.loading ? <FullScreenLoader/> :
    (
        <ScrollView contentContainerStyle={styles.mainView}>
            <StatusBar backgroundColor={'#2c2c54'}/>
            <ContentBackDrop
                onPress={goBack}
                poster={tvShowDetails.poster_path}
                backdrop={tvShowDetails.backdrop_path}
            />
            <View style={styles.contents}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentTitle}>{tvShowDetails.name}</Text>
                    <Text style={styles.contentText}>{tvShowDetails.first_air_date}</Text>
                </View>
                <View style={styles.contentOverview}>
                    <Text style={styles.contentTitleSub}>Overview</Text>
                    <Text style={styles.contentText}>{tvShowDetails.overview}</Text>
                </View>
                <View style={styles.contentSeasons}>
                    <Text style={styles.contentTitleSub}>Seasons</Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={tvShowDetails.seasons}
                        keyExtractor={ item => item.id }
                        renderItem={({ item }) => (
                            <SeasonCard
                                data={item}
                                poster={tvShowDetails.poster_path}
                            />
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailScreen;
