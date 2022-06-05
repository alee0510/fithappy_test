/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backDrop : {
        width : '100%',
        height : '30%',
        display : 'flex',
        alignItems : 'center',
    },
    backDropImage : {
        width : '100%',
        height : '110%',
    },
    backdropColor : {
        width : '100%',
        height : '110%',
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 2,
        backgroundColor : '#2c2c54',
        opacity : 0.8,
    },
    posterImage : {
        width : 180,
        height : 250,
        position : 'relative',
        top : '-85%',
        left : 0,
        zIndex : 3,
        borderRadius : 20,
        overflow : 'hidden',
    },
    image : {
        width : '100%',
        height : '100%',
    },
    backButton : {
        height : 35,
        width : 35,
        backgroundColor :'#2c2c54',
        position : 'absolute',
        top : 25,
        left : 25,
        borderRadius : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 20,
        shadowColor : '#2c2c54',
        zIndex : 10,
    },
});

export default styles;

