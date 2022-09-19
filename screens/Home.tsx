import { StyleSheet } from 'react-native'
import { Button, View, Text, Image } from 'react-native-ui-lib'
import { DefaultScreenProps } from '../interfaces/screen'

export const Home = ({ navigation }: DefaultScreenProps) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/thrifty-b.png')}
            />
            <Text
                style={{
                    color: 'white',
                    fontSize: 40
                }}
            >
                Welcome
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: 100
                }}
            >
                <Button
                    label='Sign In'
                    onPress={() => navigation.navigate('Sign In')}
                />
                <Button
                    label='Sign Up'
                    onPress={() => navigation.navigate('Sign Up')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#720e9e',
        // backgroundColor: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 99,
        width: 200
    }
});