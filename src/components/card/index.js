/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IMAGE_URL } from '@env';

// styles
import styles, { seasonCardStyles } from './styles';

function Card ({ navigation, tvshow }) {
    const gotToDetails = _ => navigation.navigate('Details', { id : tvshow.id });

    return (
        <TouchableOpacity style={styles.card} onPress={gotToDetails}>
            <View style={styles.cardImage}>
                <Image style={styles.image} source={{ uri : IMAGE_URL + '/w500' +  tvshow.poster_path }}/>
            </View>
            <View style={styles.cardContents}>
                <Text style={styles.cardTitle}>{tvshow.original_name}</Text>
                <Text style={styles.cardText}>{tvshow.first_air_date} . {tvshow.original_language.toUpperCase()}</Text>
                <View style={styles.cardFooter}>
                    <Text style={styles.cardText}>Rating : {tvshow.vote_average}</Text>
                    <View style={styles.starIcon}>
                        <Icon name="star" size={20} color="#ffb142"/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export function SeasonCard ({ data, poster }) {
    return (
        <View style={seasonCardStyles.seasonCard}>
            <View style={seasonCardStyles.seasonImg}>
                <Image
                    style={seasonCardStyles.posterImage}
                    source={{ uri : IMAGE_URL + '/w500' + (data.poster_path || poster) }}
                />
            </View>
            <View style={seasonCardStyles.seasonFooter}>
                <Text style={seasonCardStyles.seasonText}>{data.air_date && data.air_date.split('-')[0]} | </Text>
                <Text style={seasonCardStyles.seasonText}>{data.episode_count} EP</Text>
            </View>
        </View>
    );
}

export default Card;
