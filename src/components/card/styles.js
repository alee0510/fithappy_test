/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card : {
        backgroundColor : '#f7f1e3',
        width : '100%',
        height : 90,
        borderRadius : 8,
        marginVertical : 6,
        padding : 8,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        elevation : 8,
        shadowColor: '#2c3e50',
    },
    cardImage : {
        height : '100%',
        width : 56,
        backgroundColor : '#d1ccc0',
        borderRadius : 5,
        overflow : 'hidden',
    },
    image : {
        width : '100%',
        height : '100%',
    },
    cardContents : {
        flex : 1,
        marginLeft : 10,
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'flex-start',
    },
    cardTitle : {
        color : '#2c2c54',
        fontSize : 18,
        fontWeight : 'bold',
    },
    cardText : {
        color : '#2c2c54',
        fontSize : 14,
    },
    cardFooter : {
        width : '100%',
        height : 20,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        position : 'absolute',
        bottom : 0,
    },
    starIcon : {
        marginLeft : 5,
        color : '#ffb142',
    },
});

export const seasonCardStyles = StyleSheet.create({
    seasonCard : {
        width : 100,
        height : 170,
        marginRight : 5,
        borderRadius : 5,
    },
    seasonImg : {
        width : '100%',
        height : 140,
        borderRadius : 5,
        overflow : 'hidden',
    },
    seasonFooter : {
        flex : 1,
        marginTop : 5,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    seasonText : {
        color : '#2c2c54',
        fontSize : 12,
    },
    posterImage : {
        height : '100%',
        width : '100%',
    },
});

export default styles;
