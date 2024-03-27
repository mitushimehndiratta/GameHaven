import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import ImageButton from './ImageButton.js';

const Login = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleLogin = () => {
        navigation.navigate('Main');
    };
    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
                source={require('./assets/LoginPage.jpg')}
                style={{
                    position: 'absolute',
                    top: 20,
                    width: 128,
                    height: 128,
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
                textAlign: 'center',
                top: 163,
            }}>
                GameHaven
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
            <View style={{
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
            </View>

            {/* Rectangle for password */}
            <View style={{
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
            </View>

            {/* Forgot Password link */}
            <TouchableOpacity onPress={handleForgotPassword} style={{
                top: 66,
                width: 130,
                height: 20,
                //backgroundColor: 'black',
                alignItems: 'center',
                left: 90
            }}>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    color: 'red',
                    fontSize: 14,
                    left: 20,
                }}>
                    Forgot Password
                </Text>
            </TouchableOpacity>

            {/* Login button fo going to main page */}
            <TouchableOpacity onPress={handleLogin} style={{
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
            </TouchableOpacity>
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
            <ImageButton
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
            />
            {/* paid games */}
            <TouchableOpacity onPress={handleSignup} style={{
                top: 265,
                width: 150,
                height: 30,
                alignItems: 'center',
            }}>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    color: 'red',
                    fontSize: 16,
                    left: 10,
                }}>
                    New user? Sign up
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
