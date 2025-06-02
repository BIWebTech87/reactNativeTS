import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ex_1 from "./src/components/exercise_1/ex_1";
import Ex_2 from "./src/components/exercise_2/ex_2";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello World - main file</Text>
            <Ex_1/>
            <Ex_2/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
