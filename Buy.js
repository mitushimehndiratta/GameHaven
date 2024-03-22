import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
//import ImageButton from './ImageButton.js';

const Buy = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const navigation = useNavigation();

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

    // const handleForgotPassword = () => {
    //     navigation.navigate('ForgotPassword');
    // };

    // const handleLogin = () => {
    //     navigation.navigate('Main');
    // };
    // const handleSignup = () => {
    //     navigation.navigate('Signup');
    // };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
                source={require('./assets/FallGuys.png')}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 375,
                    height: 303,
                }}
                resizeMode="contain"
            />
            {/* Header GameHaven */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 30,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                left: 24,
                top: 163,
            }}>
                Fall Guys
            </Text>
            {/* Text: discover and play games */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '600',
                textAlign: 'center',
                top: 210,
            }}>
                Discover fun games to play!
            </Text>

            {/* Rectangle to enter your Email */}
            {/* <View style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 15,
                top: 256,
                width: 327,
                height: 52,
                fontWeight: 500,
                backgroundColor: '#ffffff',
                borderColor: '#ededed',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
            }}>
                <TextInput
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    style={{ fontSize: 16, flex: 1, paddingLeft: 20 }}
                />
            </View> */}

            {/* Rectangle for password */}
            {/* <View style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 15,
                top: 320,
                width: 327,
                height: 52,
                fontWeight: 500,
                backgroundColor: '#ffffff',
                borderColor: '#ededed',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
            }}>
                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={{ fontSize: 16, flex: 1, paddingLeft: 20 }}
                />
            </View> */}

            {/* Forgot Password link */}
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={{ color: 'red', position: 'absolute', left: 50, top: 48 }}>Forgot Password</Text>
            </TouchableOpacity>

            {/* Login button fo going to main page */}
            {/* <TouchableOpacity onPress={handleLogin} style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 15,
                top: 420,
                width: 327,
                height: 52,
                fontWeight: 500,
                backgroundColor: '#ffffff',
                borderColor: '#1d1d1f',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
            }}>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'NunitoRegular',
                    fontWeight: '700',
                    fontSize: 18,
                    left: 135,
                    color: '#000000',
                }}>
                    Login
                </Text>
            </TouchableOpacity> */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 16,
                fontFamily: 'NunitoRegular',
                fontWeight: '500',
                textAlign: 'center',
                top: 490,
            }}>
                or, Login using
            </Text>
            {/* Image button */}
            {/* <ImageButton
                onPress={() => { }}
                source={require('./assets/apple.png')} // Replace with the path to your image
                style={{
                    position: 'absolute',
                    top: 205,
                    width: 24,
                    height: 24,
                    left: -110
                }}
            />
            <ImageButton
                onPress={() => { }}
                source={require('./assets/facebook.png')} // Replace with the path to your image
                style={{
                    position: 'absolute',
                    top: 206,
                    width: 24,
                    height: 24,
                    left: -14
                }}
            />
            <ImageButton
                onPress={() => { }}
                source={require('./assets/google.png')} // Replace with the path to your image
                style={{
                    position: 'absolute',
                    top: 206,
                    width: 23,
                    height: 23,
                    left: 85
                }}
            /> */}
            {/* paid games */}
            {/* <TouchableOpacity onPress={handleSignup}>
                <Text style={{ color: 'red', top: 260, fontSize: 16 }}>New user? Sign up</Text>
            </TouchableOpacity> */}
            {/* Bottom Navigation */}
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 50,
                backgroundColor: 'lightgray',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={() => { }}
                        source={require('./assets/home.png')} // Replace with the path to your image
                        style={{
                            width: 22,
                            height: 22,
                            left: 15
                        }}
                    />
                    <Text style={{ left: 15 }}>Home</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={() => { }}
                        source={require('./assets/cart.png')} // Replace with the path to your image
                        style={{
                            width: 22,
                            height: 22,
                            left: 8
                        }}
                    />
                    <Text style={{ left: 8 }}>Cart</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={() => { }}
                        source={require('./assets/search.png')} // Replace with the path to your image
                        style={{
                            width: 22,
                            height: 22,
                            left: 3
                        }}
                    />
                    <Text style={{ left: 3 }}>Find</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={() => { }}
                        source={require('./assets/user.png')} // Replace with the path to your image
                        style={{
                            width: 22,
                            height: 22,
                            left: -10

                        }}
                    />
                    <Text style={{ left: -10 }}>Profile</Text>
                </View>
            </View>
        </View>
    );
}


export default Buy;
