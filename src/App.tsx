/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight
} from 'react-native';
import coinButtonImage from './assets/coin.png';
import bckgImage from './assets/main-screen-chicken.png';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? 'white' : 'black',
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? 'white' : 'black',
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
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
          <View style={styles.center}>
            <Text style={[styles.highlight, styles.textShadow]}>Welcome to</Text>
          </View>
          <View style={styles.center}>
            <Text style={[styles.highlight, styles.mainTitle, styles.textShadow]}>Chicken Farm v0.1</Text>
          </View>
          <View style={styles.center}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="rgba(255, 255, 255, 0.5)"
            onPress={() => console.log('Button pressed!')}
          >
            <ImageBackground source={coinButtonImage} style={styles.image}>
              <Text style={styles.buttonText}>Start</Text>
            </ImageBackground>
          </TouchableHighlight>
          </View>
        </View>
        </ImageBackground>
    </SafeAreaView>
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
    flex: 1,
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
    textShadowRadius: 2,
  },
});

export default App;
