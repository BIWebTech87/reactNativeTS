import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    first_var:{
        fontStyle:'italic',
        fontSize:14,
        borderColor:'red',
        borderStyle:'dashed',
        borderWidth:1,
        width:"50%",
        margin: "auto",
        marginTop:15
    },
    next_var:{
        borderColor:'red',
        borderStyle:'dashed',
        borderWidth:1,
        width:"90%",
        margin: "auto",
    },
    coffe_peaple:{
        borderWidth:10,
        borderColor:'red',
        borderStyle:'dashed',
        width:"80%",
        margin: "auto",
    },
    hungry_peaple:{
        borderWidth:20,
        borderColor:'green',
        borderStyle:'dotted',
        width:"80%",
        margin: "auto",
    }
})

export default styles;