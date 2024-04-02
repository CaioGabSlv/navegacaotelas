import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TextInput
                label='Email'
                placeholder='usuario@gmail.com'
            />
            <TextInput
                label='Senha'
                placeholder='********'
            />
            <Button
            icon='login'
            mode='contained'
            //buttonColor='blue'
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
            >
                Entrar
            </Button>
            <View style={styles.registerContainer}>
                <Text>Ainda não tem conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.textRegister}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
    button: {
        marginTop: 20,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textRegister: {
        color: 'blue',
        fontWeight: '500',
    },
});

export default Login;
