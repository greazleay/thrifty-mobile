import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button, Incubator } from 'react-native-ui-lib';

const { TextField } = Incubator

export const SignIn = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 250
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
                    Sign In
                </Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        height: 150
                    }}
                >
                    <TextField
                        placeholder={'Email'}
                        floatingPlaceholder
                        onChangeText={(text: string) => console.log(text)}
                        enableErrors
                        validate={['required', 'email']}
                        validationMessage={['Field is required', 'Email is invalid']}
                        showCharCounter
                        maxLength={30}
                        color='white'
                    />

                    <TextField
                        placeholder='Password'
                        floatingPlaceholder
                        onChangeText={(text: string) => console.log(text)}
                        enableErrors
                        validate={['required', 'password', (value: string | any[]) => value.length > 6]}
                        validationMessage={['Field is required', 'Password is too short']}
                        showCharCounter
                        maxLength={30}
                        color='white'
                    />

                    <Button
                        label='Sign In'
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
});