import { registerRootComponent } from 'expo';
import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login.js';
import ForgotPasswordScreen from './ForgotPassword';
import MainScreen from './Main';
import SignupScreen from './Signup';
import BuyScreen from './Buy';
import PlayScreen from './Play';
import FindScreen from './Find';
import CartScreen from './Cart';
import ProfileScreen from './Profile';

const Stack = createNativeStackNavigator();

const Home = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadAssetsAsync = async () => {
            await Font.loadAsync({
                NunitoRegular: require('./assets/fonts/NunitoRegular.ttf'),
                NunitoItalic: require('./assets/fonts/NunitoItalic.ttf'),
            });
            setFontLoaded(true);
        };

        loadAssetsAsync();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Buy" component={BuyScreen} />
                <Stack.Screen name="Play" component={PlayScreen} />
                <Stack.Screen name="Find" component={FindScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
// const { width, height } = Dimensions.get('window');
// const baseFontSize = 40; // Set your base font size (in pixels)
const calculateFontSize = (percentage) => {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    // Assuming some logic to derive base font size from screen dimensions
    const baseFontSize = Math.floor(Math.min(screenWidth, screenHeight) * 0.05); // Example logic
    // console.log(screenWidth);
    // console.log(screenHeight);
    // Calculate the font size based on percentage and base font size
    return (percentage) * baseFontSize;
};
const HomeScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate('Login');
    };
    const fontSize = calculateFontSize(1);
    // Calculate font size based on screen width
    //const fontSize = 1 * 0.15; // Adjust the scaling factor (0.05) as needed
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            //justifyContent: 'center',
        }}>
            <View style={{
                marginTop: '1%',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '90%',
                height: 2,
                backgroundColor: '#c2c2c2',
                borderRadius: 2,
            }} />

            {/* Header GameHaven */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: { fontSize },
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                //lineHeight: 52,
                textAlign: 'center',
                marginTop: '3%'
            }}>
                GameHaven
            </Text>

            <View style={{
                marginTop: '10%',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '90%',
                height: 2,
                backgroundColor: '#c2c2c2',
                borderRadius: 2,
            }} />

            {/* Text: discover and play games */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '600',
                lineHeight: 32,
                textAlign: 'center',
                top: 138,

            }}>
                Discover and play{'\n'}
                exciting games today.
            </Text>

            <Image
                source={require('./assets/landingPage.jpg')}
                style={{
                    position: 'absolute',
                    top: 200,
                    width: 336,
                    height: 297,
                }}
                resizeMode="contain"
            />
            {/* Rectangle with Get Started button */}
            <TouchableOpacity onPress={handleGetStarted} style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 20,
                top: 520,
                width: 327,
                height: 52,
                fontWeight: 500,
                backgroundColor: '#ffffff',
                borderColor: '#1d1d1f',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8, // Padding for space around image and text
            }}>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'NunitoRegular',
                    fontWeight: '700',
                    fontSize: 18,
                    left: 115,
                    color: '#000000',
                }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

registerRootComponent(Home);
