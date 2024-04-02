import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:  'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Home;
