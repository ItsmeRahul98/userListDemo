import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:15,
        paddingBottom:4,
        paddingHorizontal:8
    },
    contentCenter: {
        paddingTop: 24
    },
    pageTitle:{
        fontSize:24,
        fontWeight:'500',
        textAlign:'center'
    },
    row:{
        marginHorizontal:10,
    },
    columnDesign:{
        width:100,
        margin:4,
        borderWidth:1,
        borderColor:'grey',
        padding:8
    },
    searchBar:{
        paddingVertical:15,
        alignItems:'flex-end'
    },
    TextInput:{ height: 40, borderColor: 'gray', borderWidth: 1,width:'60%' }
});

export default styles;