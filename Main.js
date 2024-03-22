import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
//import { ScrollView } from 'react-native';
import ImageButton from './ImageButton.js';

const MainScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
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

    const handlePaid = () => {
        navigation.navigate('Paid');
    };

    const handleFree = () => {
        navigation.navigate('Free');
    };
    const handlePlay = () => {
        navigation.navigate('Play');
    };
    const handleBuy = () => {
        navigation.navigate('Buy');
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {/* Discover Games */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 30,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                textAlign: 'center',
                top: 8,
            }}>
                Discover Games!
            </Text>
            <Image
                source={require('./assets/MainPage.jpg')}
                style={{
                    position: 'absolute',
                    top: 32,
                    width: 160,
                    height: 160,
                }}
                resizeMode="contain"
            />
            {/* all */}
            <Text style={{
                position: 'absolute',
                color: 'white',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                backgroundColor: '#ce2c2f',
                fontWeight: '700',
                fontSize: 16,
                borderRadius: 12,
                width: 56,
                height: 20,
                textAlign: 'center',
                top: 200,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                All
            </Text>
            {/* paid games */}
            <TouchableOpacity onPress={handlePaid}>
                <Text style={{ color: 'black', left: 58, top: -115, fontSize: 16 }}>Paid</Text>
            </TouchableOpacity>
            {/* free games */}
            <TouchableOpacity onPress={handleFree}>
                <Text style={{ color: 'black', right: -107, top: -137, fontSize: 16 }}>free</Text>
            </TouchableOpacity>
            <View style={{
                position: 'absolute',
                top: 225,
                left: 18,
                width: 327,
                height: 2,
                backgroundColor: '#c2c2c2',
                borderRadius: 2,
            }} />
            {/* New on GameHaven*/}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                lineHeight: 52,
                left: 18,
                top: 230,
            }}>
                New on GameHaven
            </Text>

            {/* New Games section */}
            {/* 1st game */}
            <View style={{
                position: 'absolute',
                backgroundColor: '#c2c2c2',
                borderRadius: 12,
                left: 18,
                width: 200,
                height: 176,
                top: 300,
                paddingLeft: 10,
            }}>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={{ width: 180, height: 80, marginTop: 7 }}
                />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 6 }}>Top Picks</Text>
                <Text style={{ fontSize: 10 }}>Action, RPG, Simulation</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 18 }}>FREE</Text>
                <TouchableOpacity onPress={handlePlay} style={{
                    //position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: 'white',
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 12,
                    width: 44,
                    height: 24,
                    top: -150,
                    left: 130
                }}>
                    <Text style={{
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        fontSize: 12,
                        color: 'black',
                    }}>Play</Text>
                </TouchableOpacity>
            </View>
            {/* 2nd game */}
            <View style={{
                position: 'absolute',
                backgroundColor: '#c2c2c2',
                borderRadius: 12,
                left: 240,
                width: 200,
                height: 176,
                top: 300,
                paddingLeft: 10,
            }}>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={{ width: 180, height: 80, marginTop: 7 }}
                />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 6 }}>Top Picks</Text>
                <Text style={{ fontSize: 10 }}>Action, RPG, Simulation</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 18 }}>FREE</Text>
                <TouchableOpacity onPress={handlePlay} style={{
                    //position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: 'white',
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 12,
                    width: 44,
                    height: 24,
                    top: -150,
                    left: 130
                }}>
                    <Text style={{
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        fontSize: 12,
                        color: 'black',
                    }}>Play</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                position: 'absolute',
                top: 510,
                left: 18,
                width: 327,
                height: 2,
                backgroundColor: '#c2c2c2',
                borderRadius: 2,
            }} />
            {/* Trending now*/}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                lineHeight: 52,
                left: 18,
                top: 517,
            }}>
                Trending Now
            </Text>
            {/* trending games section */}
            {/* 1st game */}
            <View style={{
                position: 'absolute',
                backgroundColor: '#c2c2c2',
                borderRadius: 12,
                left: 18,
                width: 200,
                height: 176,
                top: 590,
                paddingLeft: 10,
            }}>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={{ width: 180, height: 80, marginTop: 7 }}
                />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 6 }}>Top Picks</Text>
                <Text style={{ fontSize: 10 }}>Action, RPG, Simulation</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 18 }}>PAID</Text>
                <TouchableOpacity onPress={handleBuy} style={{
                    //position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: 'white',
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 12,
                    width: 44,
                    height: 24,
                    top: -150,
                    left: 130
                }}>
                    <Text style={{
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        fontSize: 12,
                        color: 'black',
                    }}>Buy</Text>
                </TouchableOpacity>
            </View>
            {/* 2nd game */}
            <View style={{
                position: 'absolute',
                backgroundColor: '#c2c2c2',
                borderRadius: 12,
                left: 240,
                width: 200,
                height: 176,
                top: 590,
                paddingLeft: 10,
            }}>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={{ width: 180, height: 80, marginTop: 7 }}
                />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 6 }}>Top Picks</Text>
                <Text style={{ fontSize: 10 }}>Action, RPG, Simulation</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 18 }}>PAID</Text>
                <TouchableOpacity onPress={handlePlay} style={{
                    //position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: 'white',
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 12,
                    width: 44,
                    height: 24,
                    top: -150,
                    left: 130
                }}>
                    <Text style={{
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        fontSize: 12,
                        color: 'black',
                    }}>Buy</Text>
                </TouchableOpacity>
            </View>
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
                {/* <TouchableOpacity onPress={() => alert('Navigate to Screen 1')}>
                    <Text>Screen 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Navigate to Screen 2')}>
                    <Text>Screen 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Navigate to Screen 3')}>
                    <Text>Screen 3</Text>
                </TouchableOpacity> */}
            </View>





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
            {/* <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={{ color: 'red', position: 'absolute', left: 50, top: 50 }}>Forgot Password</Text>
            </TouchableOpacity> */}

            {/* Login button */}
            {/* <TouchableOpacity onPress={handleLogin}>
                <Text style={{ color: 'blue', position: 'absolute', left: 50, top: 100 }}>Login</Text>
            </TouchableOpacity> */}
        </View>
    );
}

export default MainScreen;
