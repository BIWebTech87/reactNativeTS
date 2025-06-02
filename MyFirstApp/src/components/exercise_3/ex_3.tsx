import React, {useState} from "react";
import {Image, StyleSheet, Text, View, TouchableOpacity, Button} from "react-native";
import styles from "./ex_3.styles"


const get_full_name = (
    first_name: string,
    last_name: string,
    age: number
) => {
    return `my name is ${first_name} ${last_name}, and i am ${age} years old`;
}

type Ex_3Props = {
    name: string;
    age: number;
}

type Ex_3HungryState = {
    name: string;
}

const HungryPeaple = (
    props: Ex_3HungryState
) => {
    return (
        <Text>Hi, my name is {props.name}, and i am hungry</Text>
    );
};

const ButtonFunc = ({name}: { name: string }) => {
    const [isHungry, setIsHungry] = useState<boolean>(true);
    return (
        <View>
            <HungryPeaple name={name}/>
            <Button
                onPress={() => setIsHungry(false)}
                disabled={!isHungry}
                title={isHungry ? "Give me eat!" : "Thanks!"}
            />
        </View>

    );
}

const LetDrinkSomeCofe = (
    props: Ex_3Props,
) => {
    return (
        <Text>Hi, my name is {props.name}, and i am {props.age}</Text>
    );
};

const Ex_3 = () => {
    const myVar = "Boris Isac Boris"
    const title = "Exercise 3"

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.first_var}>{myVar}</Text>
            <Text style={styles.title}>{title}, get info from function</Text>
            <Text style={
                styles.next_var
            }>{
                get_full_name(
                    "Boris",
                    "Isac",
                    37
                )}
            </Text>
            <Text style={styles.title}>{title}, Let drink some coffe</Text>
            <View style={styles.coffe_peaple}>
                <LetDrinkSomeCofe name="Emily" age={7}/>
                <LetDrinkSomeCofe name="Aaron" age={12}/>
                <LetDrinkSomeCofe name="Boris" age={37}/>
                <LetDrinkSomeCofe name="Mae" age={40}/>
            </View>
            <View style={styles.hungry_peaple}>
                <ButtonFunc name={"Boris"}/>
                <ButtonFunc name={"Aaron"}/>
                <ButtonFunc name={"Emily"}/>
                <ButtonFunc name={"Shljushka"}/>

            </View>

        </View>
    )
}

export default Ex_3;