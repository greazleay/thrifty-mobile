import { StyleSheet } from 'react-native';
import { Button, Incubator, Text, View } from 'react-native-ui-lib';

const { TextField } = Incubator

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
                    <TextField
                        placeholder={'First Name'}
                        floatingPlaceholder
                        onChangeText={(text: string) => console.log(text)}
                        enableErrors
                        validate={'required'}
                        validationMessage={['Field is required']}
                        showCharCounter
                        maxLength={30}
                        color='white'
                    />

                    <TextField
                        placeholder={'Last Name'}
                        floatingPlaceholder
                        onChangeText={(text: string) => console.log(text)}
                        enableErrors
                        validate={'required'}
                        validationMessage={['Field is required']}
                        showCharCounter
                        maxLength={30}
                        color='white'
                    />

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
                        validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
                        showCharCounter
                        // maxLength={30}
                        minLenth={6}
                        color='white'
                    />

                    <Button
                        label='Register'
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