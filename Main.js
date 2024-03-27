import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import ImageButton from './ImageButton.js';

const MainScreen = () => {
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
                <Text style={{ color: 'black', left: 58, top: 199, fontSize: 16 }}>Paid</Text>
            </TouchableOpacity>
            {/* free games */}
            <TouchableOpacity onPress={handleFree}>
                <Text style={{ color: 'black', right: -107, top: 177, fontSize: 16 }}>free</Text>
            </TouchableOpacity>
            <View style={{
                position: 'absolute',
                top: 225,
                left: 13,
                width: 333,
                height: 2,
                backgroundColor: '#c2c2c2',
                borderRadius: 2,
            }} />
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
                        New on GameHaven
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
                                <Text style={styles.horizontalPrice}>FREE</Text>
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
                                <Text style={styles.horizontalPrice}>FREE</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        position: 'absolute',
                        top: 270,
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
                        top: 280,
                    }}>
                        Trending Now
                    </Text>
                    <ScrollView horizontal>
                        <View style={[styles.horizontalScrollContainer, { marginTop: 60 }]}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handleBuy} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Buy</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                                <Text style={styles.horizontalPrice}>PAID</Text>
                            </View>
                        </View>
                        <View style={[styles.horizontalScrollContainer, { marginTop: 60 }]}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handleBuy} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Buy</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                                <Text style={styles.horizontalPrice}>PAID</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        position: 'absolute',
                        top: 570,
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
                        top: 580,
                    }}>
                        Limited Edition
                    </Text>
                    <ScrollView horizontal>
                        <View style={[styles.horizontalScrollContainer, { marginTop: 60, marginBottom: 110 }]}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handleBuy} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Buy</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                                <Text style={styles.horizontalPrice}>PAID</Text>
                            </View>
                        </View>
                        <View style={[styles.horizontalScrollContainer, { marginTop: 60, marginBottom: 110 }]}>
                            <Image
                                source={require('./assets/Main1.jpg')}
                                style={styles.horizontalImage}
                            />
                            <TouchableOpacity onPress={handleBuy} style={styles.playButton}>
                                <Text style={styles.playButtonText}>Buy</Text>
                            </TouchableOpacity>
                            <View style={styles.horizontalContent}>
                                <Text style={styles.horizontalTitle}>Top Picks</Text>
                                <Text style={styles.horizontalGenre}>Action, RPG, Simulation</Text>
                                <Text style={styles.horizontalPrice}>PAID</Text>
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
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginTop: 175,
        marginHorizontal: 10
    },
    horizontalScrollContainer: {
        backgroundColor: '#c2c2c2',
        borderRadius: 12,
        width: 200,
        height: 200,
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

export default MainScreen;
