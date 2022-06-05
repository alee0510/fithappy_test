/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// styles
import styles from './styles';

function Header () {
    return (
        <View style={styles.header}>
            <View style={styles.appTitle}>
                <Icon name="movie" size={25} color="#f7f1e3"/>
                <Text style={styles.headerTitle}>Popular Shows</Text>
            </View>
            <View style={styles.searchBox}>
                <View style={styles.searchIcon}>
                    <Icon name="search" size={20} color="#2c2c54"/>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="find your favorite shows..."
                    placeholderTextColor={'#2c2c54'}
                />
            </View>
        </View>
    );
}

export default Header;
