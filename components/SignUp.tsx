import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button, Input } from '@rneui/themed';

export const SignUp = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '80%'
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        alignSelf: 'flex-start',
                        fontSize: 40,
                        fontWeight: 'bold'
                    }}
                >
                    Sign Up
                </Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        height: 300
                    }}
                >
                    <Input
                        placeholder='First Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        containerStyle={styles.input}
                    />
                    <Input
                        placeholder='Last Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        containerStyle={styles.input}
                    />
                    <Input
                        placeholder='Email'
                        leftIcon={{ type: 'font-awesome', name: 'at' }}
                        containerStyle={styles.input}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={{ type: 'font-awesome', name: 'eye-slash' }}
                        containerStyle={styles.input}
                    />
                    <Button
                        title={'Register'}
                        size='sm'
                        buttonStyle={{
                            borderRadius: 10
                        }}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7140AE',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200
    }
});