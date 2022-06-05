/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView : {
        flex : 1,
        backgroundColor : '#2c2c54',
    },
    contents : {
        flex : 1,
        backgroundColor : '#f7f1e3',
        paddingTop : 60,
        paddingHorizontal :'8%',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        zIndex : 2,
    },
    contentHeader : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
    },
    contentTitle : {
        color : '#2c2c54',
        fontSize : 32,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : 20,
        marginBottom : 10,
    },
    contentText : {
        color : '#2c2c54',
        fontSize : 14,
        textAlign : 'justify',
    },
    contentOverview : {
        width : '100%',
        marginTop : 10,
    },
    contentTitleSub : {
        color : '#ffb142',
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 6,
    },
    contentSeasons : {
        flex : 1,
        marginTop : 5,
        marginBottom : 40,
    },
});

export default styles;
