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
    TextInput,
    ScrollView
} from 'react-native';
import bckgImage from './../assets/main-screen-chicken.png';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import CheckBox from '@react-native-community/checkbox';
// import OrderedList from '../components/OrderedList'

const userStorage = new MMKVLoader().withEncryption().withInstanceID('userdata').initialize();

function TermnsScreen({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [isAcceptedTheTermsAndConditions, setIsAcceptedTheTermsAndConditions] = useMMKVStorage('isAcceptedTheTermsAndConditions', userStorage, false);

    function handleUsernameChange(text: string) {
        setUsername(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    function handleLogin() {
        console.log('Login pressed! Username: ' + username + ' Password: ' + password);
    }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white'
    };

    return (
        <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text style={[styles.highlight, styles.textShadow]}>Terms and Conditions for ChickenFarm</Text>

            <ScrollView style={styles.scrollView}>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    1. Acceptance of Terms
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    By accessing and playing ChickenFarm, you agree to these Terms and Conditions.
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    2. Game Description
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    ChickenFarm is a single-player mobile game where players manage a virtual farm. The objective is to raise virtual chickens, collect eggs, sell them for virtual coins, and build a thriving virtual farm economy. Players can upgrade various aspects of their farm as part of the gameplay. The game features a global leaderboard displaying high scores in different categories like coins earned, eggs collected, and other achievements. ChickenFarm is an endless game, designed for enjoyment and skill development.
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    3. Account and Data Storage
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    No personal data is collected or stored, except for the player's email address used for reassigning gameplay.
                    High scores and game states are saved remotely to preserve game progress and display on the global leaderboard.
                    Usernames are randomly generated using a whitelisted word list to ensure privacy and safety.
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    4. User Conduct
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    Users are expected to play the game fairly and respect the integrity of the leaderboard.
                    Any form of cheating or exploitation of the game is strictly prohibited.
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    5. Intellectual Property
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    All content in ChickenFarm, including graphics, gameplay, and text, is the intellectual property of Domokos Balazs.
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    6. Changes to Terms and Conditions
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting.
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    7. Contact Information
                </Text>
                <Text style={[styles.highlight, styles.textShadow, styles.longText]}>
                    For any questions or concerns regarding these Terms and Conditions, please contact us at balazsdomokos88@gmail.com.
                </Text>
                <View style={styles.buttonContainer}>
                    <CheckBox
                        disabled={false}
                        value={isAcceptedTheTermsAndConditions}
                        onValueChange={(isAccepted) => setIsAcceptedTheTermsAndConditions(isAccepted)}
                    />
                    <Button
                        title="Accept all"
                        onPress={() => {
                            handleLogin();
                            navigation.navigate('InitScreen')
                        }}
                    />
                </View>
            </ScrollView>
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
    longText: {
        fontSize: 16,
        textAlign: 'left',
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
        justifyContent: 'flex-end', // Add space between buttons
        width: '100%', // Match the input container's width
    },
    signupLink: {
        color: 'deepskyblue',
        marginTop: 12,
    },
    scrollView: {
        marginHorizontal: 20,
        paddingVertical: 10,
    },
});

export default TermnsScreen;