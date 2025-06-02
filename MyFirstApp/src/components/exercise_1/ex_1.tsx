import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './ex_1.styles'

const MyFirstApp = () => {
    return (
        <View style={ styles.container }>
            <Text style={styles.title}>Exercise 1</Text>
            <Text>Hello World - Ex_1 file</Text>
        </View>

    );
};

export default MyFirstApp;