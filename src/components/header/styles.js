/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header : {
        backgroundColor : '#40407a',
        height : '16%',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center',
        paddingBottom : 20,
        elevation: 8,
        shadowColor: '#2c2c54',
    },
    headerTitle : {
        fontSize : 28,
        fontWeight : 'bold',
        marginLeft : 10,
        color : '#f7f1e3',
    },
    appTitle : {
        flex : 1,
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },
    searchBox : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },
    searchIcon : {
        width : 35,
        height : 35,
        backgroundColor : '#f7f1e3',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderTopLeftRadius : 7,
        borderBottomLeftRadius : 7,

    },
    textInput : {
        backgroundColor : '#f7f1e3',
        fontSize : 14,
        height : 35,
        width : '80%',
        borderTopRightRadius : 7,
        borderBottomRightRadius : 7,
        color : '#2f3542',
        paddingHorizontal : 5,
        paddingVertical : 0,
    },
});

export default styles;
