import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import bckgImage from './../assets/main-screen-chicken.png';

function LoginScreen({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white'
    };

    return (
        <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ImageBackground
                source={bckgImage}
                style={styles.imageBackground}
            >
                <View style={styles.container}>
                    <Text style={[styles.highlight, styles.textShadow]}>Login</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                        title="Login"
                        onPress={() => {
                            // Handle regular login logic here
                        }}
                        />
                        <Button
                        title="Login with Google"
                        onPress={() => {
                            // Handle login with Google logic here
                        }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            // Navigate to the Signup screen or perform the signup action
                        }}
                    >
                        <Text style={[styles.signupLink, styles.textShadow]}>Don't have an account? Sign up here</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '100%',  // Full width
        height: '100%', // Full height
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    mainTitle: {
        fontSize: 36,
        marginBottom: 20,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'gold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    textShadow: {
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    inputContainer: {
        width: '80%',  // 80% of the screen width
    },
    input: {
        width: '100%',  // 80% of the screen width
        height: 40,
        backgroundColor: 'saddlebrown', // Brown background color
        color: 'white', // White font color
        borderWidth: 2,
        borderColor: 'saddlebrown',
        borderRadius: 5,
        padding: 8,
        marginBottom: 12,
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'space-between', // Add space between buttons
        width: '80%', // Match the input container's width
    },
    signupLink: {
        color: 'deepskyblue',
        marginTop: 12,
    },
});

export default LoginScreen;