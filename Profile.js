import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import ImageButton from './ImageButton.js';

const ProfileScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
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

    // const handlePaid = () => {
    //     navigation.navigate('Paid');
    // };

    // const handleFree = () => {
    //     navigation.navigate('Free');
    // };
    const handlePlay = () => {
        navigation.navigate('Play');
    };
    // const handleBuy = () => {
    //     navigation.navigate('Buy');
    // };
    const handleFind = () => {
        navigation.navigate('Find');
    };
    const handleCart = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
                source={require('./assets/BGpic.png')}
                style={{
                    position: 'absolute',
                    top: 2,
                    width: 260,
                    height: 70,
                    borderRadius: 30
                }}
                resizeMode="contain"
            />
            <Image
                source={require('./assets/MainPage.jpg')}
                style={{
                    position: 'absolute',
                    top: 40,
                    width: 70,
                    height: 70,
                }}
                resizeMode="contain"
            />
            {/* Discover Games */}
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                textAlign: 'center',
                top: 98,

            }}>
                Player Profile
            </Text>
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 14,
                fontFamily: 'NunitoRegular',
                fontWeight: '600',
                textAlign: 'center',
                top: 122,

            }}>
                @abc123
            </Text>
            <View style={{ position: 'absolute', top: 150, left: 100 }}>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', left: -70 }}>Games: {'\n'}</Text>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', fontWeight: 'bold', left: -64, top: -15 }}>235</Text>
            </View>
            <View style={{ position: 'absolute', top: 150, left: 170 }}>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', left: -70 }}>Achieves: {'\n'}</Text>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', fontWeight: 'bold', left: -57, top: -15 }}>35</Text>
            </View>
            <View style={{ position: 'absolute', top: 150, left: 260 }}>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', left: -70 }}>Points: {'\n'}</Text>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', fontWeight: 'bold', left: -64, top: -15 }}>498</Text>
            </View>
            <View style={{ position: 'absolute', top: 150, left: 330 }}>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', left: -70 }}>Top Score: {'\n'}</Text>
                <Text style={{ color: '#1d1d1f', fontSize: 14, fontFamily: 'NunitoRegular', fontWeight: 'bold', left: -59, top: -15 }}>10,000</Text>
            </View>

            <TouchableOpacity onPress={() => { }} style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 217,
                width: 227,
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
                    left: 92,
                    color: 'white',
                }}>
                    Edit
                </Text>
            </TouchableOpacity>

            {/* New on GameHaven*/}
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={{
                        position: 'absolute',
                        color: '#1d1d1f',
                        fontSize: 18,
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        lineHeight: 52,
                        left: 3,
                        top: -15,
                    }}>
                        Recently Played
                    </Text>
                    {/* Horizontal Scroll View */}
                    <ScrollView horizontal>
                        <View style={styles.horizontalScrollContainer}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handlePlay} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Play</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalScrollContainer}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handlePlay} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Play</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        position: 'absolute',
                        top: 220,
                        left: 18,
                        width: 333,
                        height: 2,
                        left: 3,
                        backgroundColor: '#c2c2c2',
                        borderRadius: 2,
                    }} />
                    <Text style={{
                        position: 'absolute',
                        color: '#1d1d1f',
                        fontSize: 18,
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        lineHeight: 52,
                        left: 3,
                        top: 220,
                    }}>
                        Liked Games
                    </Text>
                    <ScrollView horizontal>
                        <View style={[styles.horizontalScrollContainer, { marginTop: 40, marginBottom: 110 }]}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handlePlay} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Play</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                            </View>
                        </View>
                        <View style={[styles.horizontalScrollContainer, { marginTop: 40, marginBottom: 110 }]}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handlePlay} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Play</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
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
                </View>
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
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginTop: 240,
        marginHorizontal: 10
    },
    horizontalScrollContainer: {
        backgroundColor: '#c2c2c2',
        borderRadius: 12,
        width: 200,
        height: 160,
        padding: 10,
        top: 40,
        marginRight: 20,
        marginBottom: 45
    },
    horizontalImage: {
        width: 180,
        height: 80,
    },
    playButton: {
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        width: 44,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        right: 15,
    },
    playButtonText: {
        fontFamily: 'NunitoRegular',
        fontWeight: '700',
        fontSize: 12,
        color: 'black',
    },
    horizontalContent: {
        marginTop: 10,
    },
    horizontalTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 6,
    },
    horizontalGenre: {
        fontSize: 10,
    },
    horizontalPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 18,
    },
});

export default ProfileScreen;