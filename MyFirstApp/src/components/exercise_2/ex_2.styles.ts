import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'lightblue',
        fontSize: 20,
    },
    container: {
        borderColor: 'Blue',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    img:{
        width: 80,
        height: 80,
    },
    img_div:{
        alignItems: 'center',
    },
    txtInput:{
        borderStyle: 'solid',
        backgroundColor: 'greenlight',
        borderColor: 'blue',
        borderWidth: 1,
        width: '70%',
        marginTop: 25,
        marginLeft: '15%',
        textAlign: 'center',
    }
})

export default styles;