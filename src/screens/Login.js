import {View, Text, StyleSheet} from "react-native";
import { TextInput, Button } from "react-native-paper";

const Login = () => {
    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
            />
             <TextInput
                label="Senha"
            />
            <Button 
            icon="login" 
            mode="contained"
            style={styles.button}
            onPress={() => alert('Pressionado')}
            //buttonColor="blue"
            >
                Press me
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 10
    },
    button: {
        marginTop: 20,
        paddingVertical: 5,
    }
});

export default Login;
