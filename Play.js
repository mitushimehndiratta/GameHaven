import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import ImageButton from './ImageButton.js';
import { Ionicons } from '@expo/vector-icons';

const PlayScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [heartColor, setHeartColor] = useState('grey'); // State for heart icon color
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

    const handleSignup = () => {
        navigation.navigate('Main');
    };

    const handleHeartPress = () => {
        const newHeartColor = heartColor === 'grey' ? 'red' : 'grey';
        setHeartColor(newHeartColor);
    };

    const handleShare = () => {
        // Logic for handling share action
    };
    const handleFind = () => {
        navigation.navigate('Find');
    };
    const handleCart = () => {
        navigation.navigate('Cart');
    };
    const handleProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
                source={require('./assets/Main1.jpg')}
                style={{
                    position: 'absolute',
                    top: -30,
                    left: 0,
                    width: 365,
                    height: 303,
                }}
                resizeMode="contain"
            />
            {/* Header GameHaven */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 20,
                left: 30,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                textAlign: 'center',
                top: 255,
            }}>
                A Random Game
            </Text>
            {/* Heart Button */}
            <TouchableOpacity onPress={handleHeartPress} style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 20,
                top: 30,
                width: 33,
                height: 33,
                borderRadius: 14,
                backgroundColor: 'white',
                borderColor: '#1d1d1f',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Ionicons name="heart" size={18} color={heartColor} />
            </TouchableOpacity>
            {/* Share Button */}
            <TouchableOpacity onPress={handleShare} style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 20,
                top: 70,
                width: 33,
                height: 33,
                borderRadius: 14,
                backgroundColor: 'white',
                borderColor: '#1d1d1f',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Ionicons name="share" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 235,
                top: 257,
                width: 107,
                height: 28,
                fontWeight: 500,
                backgroundColor: 'red',
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
                    fontSize: 12,
                    left: 12,
                    color: 'white',
                }}>
                    Rate This Game
                </Text>
            </TouchableOpacity>
            <Text style={{
                position: 'absolute',
                color: 'black',
                fontSize: 16,
                fontFamily: 'NunitoRegular',
                fontWeight: '500',
                textAlign: 'center',
                top: 330,
                padding: 20
            }}>
                Synopsis: Exciting adventure game with stunning graphics and immersive gameplay.
            </Text>
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 250,
                borderRadius: 22,
                backgroundColor: 'lightgray',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}></View>
            <TouchableOpacity onPress={handleSignup} style={{
                position: 'absolute',
                cursor: 'pointer',
                //left: 50,
                top: 510,
                width: 270,
                height: 60,
                fontWeight: 500,
                backgroundColor: 'red',
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
                    left: 90,
                    color: 'white',
                }}>
                    Download
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleSignup} style={{
                position: 'absolute',
                cursor: 'pointer',
                //left: 50,
                top: 545,
                width: 270,
                height: 40,
                fontWeight: 500,
                backgroundColor: 'red',
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
                    left: 90,
                    color: 'white',
                }}>
                    Add To Cart
                </Text>
            </TouchableOpacity> */}
            <Text style={{
                position: 'absolute',
                color: 'black',
                fontSize: 16,
                left: 30,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                textAlign: 'center',
                top: 435,
            }}>
                Price:{'\n'}
                FREE
            </Text>
            <View style={{
                position: 'absolute',
                //bottom: 0,
                width: 100,
                top: 440,
                height: 30,
                left: 225,
                borderRadius: 12,
                backgroundColor: 'white',
                borderColor: 'black',
                //flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>
                <Text style={{ fontSize: 14, fontFamily: 'NunitoRegular', fontWeight: '700' }}>Players: any</Text>
            </View>
            {/* Bottom Navigation */}
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 50,
                backgroundColor: 'white',
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
                </
                View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={handleCart}
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
                        onPress={handleFind}
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
                        onPress={handleProfile}
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

export default PlayScreen;
