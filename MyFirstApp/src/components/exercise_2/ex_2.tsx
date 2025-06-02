import React from "react";
import {View, Text, Image, TextInput} from "react-native";
import styles from './ex_2.styles';
import pic1 from '../../../assets/favicon.png'

const Ex_2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercise 2</Text>
            <Text>Some text!</Text>
            <Text>Some other text!</Text>
            <View style={
                styles.img_div
            }>
                <Image style={styles.img} source={pic1} />
            </View>
            <TextInput style={styles.txtInput} placeholder={"You can type in me"}/>
        </View>


    );
};

export default Ex_2;