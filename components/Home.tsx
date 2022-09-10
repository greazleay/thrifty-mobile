import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Button } from '@rneui/base'
// import { Image } from "@rneui/themed";
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
                    title={'Sign In'}
                    TouchableComponent={TouchableOpacity}
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        borderColor: '#00ffff',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        borderWidth: 0
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={() => navigation.navigate('Sign In')}
                />
                <Button
                    title="Sign Up"
                    TouchableComponent={TouchableOpacity}
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        borderColor: '#00ffff',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        borderWidth: 0
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
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