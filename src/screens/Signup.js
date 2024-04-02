import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Signup = ({ navigation }) => {
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
            <TextInput
                label='Repita a senha'
                placeholder='********'
            />
            <Button 
            icon='login'
            mode='contained'
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            >
                Cadastrar-se
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
    },
});

export default Signup;
