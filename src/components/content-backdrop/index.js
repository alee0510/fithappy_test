/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IMAGE_URL } from '@env';

// styles
import styles from './styles';

export default function ContentBackDrop ({ poster, backdrop, onPress }) {
    return (
        <View style={styles.backDrop}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={onPress}
            >
                <Icon name="close" size={25} color="#f7f1e3"/>
            </TouchableOpacity>
            <View style={styles.backdropColor}/>
            <View style={styles.backDropImage}>
                <Image
                    style={styles.image}
                    source={{ uri : IMAGE_URL + '/w500' + backdrop }}
                />
            </View>
            <View style={styles.posterImage}>
                <Image
                    style={styles.image}
                    source={{ uri : IMAGE_URL + '/w500' + poster }}
                />
            </View>
        </View>
    );
}
