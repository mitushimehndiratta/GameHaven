import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import ImageButton from './ImageButton.js';

const CartScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);

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

    const handleFind = () => {
        navigation.navigate('Find');
    };

    const decrementQuantity = () => {
        if (quantity === 1) {
            // Remove item from cart
            // Add your logic here to remove item from cart
            console.log('Item removed from cart');
        } else {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const deleteItemFromCart = () => {
        // Implement logic to delete item from cart
        console.log('Item deleted from cart');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={{
                    //position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 18,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '700',
                    lineHeight: 52,
                    left: 143,
                    top: -15,
                }}>
                    Epic Game Title
                </Text>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={styles.Image}
                />
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 14,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    lineHeight: 52,
                    left: 143,
                    top: 9,
                }}>
                    Platform
                </Text>
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 14,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    lineHeight: 52,
                    left: 207,
                    top: 9,
                }}>
                    Genre: RPG
                </Text>
                <View style={{ flexDirection: 'row', position: 'absolute', left: 143, top: 49 }}>
                    <TouchableOpacity onPress={decrementQuantity} style={{ padding: 5, backgroundColor: '#ddd' }}>
                        <Text style={{ fontSize: 10 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, fontSize: 14 }}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity} style={{ padding: 5, backgroundColor: '#ddd' }}>
                        <Text style={{ fontSize: 10 }}>+</Text>
                    </TouchableOpacity>
                    <ImageButton
                        onPress={deleteItemFromCart}
                        source={require('./assets/dustbin.png')} // Replace with the path to your dustbin icon
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 25,
                            top: 3
                        }}
                    />
                    <Text style={{
                        position: 'absolute',
                        color: '#1d1d1f',
                        fontSize: 14,
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        textAlign: 'center',
                        top: 5,
                        left: 120

                    }}>
                        1000 RS
                    </Text>
                    <View style={{
                        position: 'absolute',
                        top: 60,
                        left: -145,
                        width: 333,
                        height: 2,
                        backgroundColor: '#c2c2c2',
                        borderRadius: 2,
                    }} />
                </View>
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 18,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '700',
                    lineHeight: 52,
                    left: 143,
                    top: 110,
                }}>
                    Another game
                </Text>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={styles.Image}
                />
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 14,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    lineHeight: 52,
                    left: 143,
                    top: 130,
                }}>
                    Platform
                </Text>
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 14,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    lineHeight: 52,
                    left: 207,
                    top: 130,
                }}>
                    Genre: RPG
                </Text>
                <View style={{ flexDirection: 'row', position: 'absolute', left: 143, top: 173 }}>
                    <TouchableOpacity onPress={decrementQuantity} style={{ padding: 5, backgroundColor: '#ddd' }}>
                        <Text style={{ fontSize: 10 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, fontSize: 14 }}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity} style={{ padding: 5, backgroundColor: '#ddd' }}>
                        <Text style={{ fontSize: 10 }}>+</Text>
                    </TouchableOpacity>
                    <ImageButton
                        onPress={deleteItemFromCart}
                        source={require('./assets/dustbin.png')} // Replace with the path to your dustbin icon
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 25,
                            top: 3
                        }}
                    />
                    <Text style={{
                        position: 'absolute',
                        color: '#1d1d1f',
                        fontSize: 14,
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        textAlign: 'center',
                        top: 5,
                        left: 120

                    }}>
                        1000 RS
                    </Text>
                    <View style={{
                        position: 'absolute',
                        top: 60,
                        left: -145,
                        width: 333,
                        height: 2,
                        backgroundColor: '#c2c2c2',
                        borderRadius: 2,
                    }} />
                </View>
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 18,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '700',
                    lineHeight: 52,
                    left: 143,
                    top: 240,
                }}>
                    A lame game
                </Text>
                <Image
                    source={require('./assets/Main1.jpg')}
                    style={styles.Image}
                />
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 14,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    lineHeight: 52,
                    left: 143,
                    top: 260,
                }}>
                    Platform
                </Text>
                <Text style={{
                    position: 'absolute',
                    color: '#1d1d1f',
                    fontSize: 14,
                    fontFamily: 'NunitoRegular',
                    fontWeight: '500',
                    lineHeight: 52,
                    left: 207,
                    top: 260,
                }}>
                    Genre: RPG
                </Text>
                <View style={{ flexDirection: 'row', position: 'absolute', left: 143, top: 303 }}>
                    <TouchableOpacity onPress={decrementQuantity} style={{ padding: 5, backgroundColor: '#ddd' }}>
                        <Text style={{ fontSize: 10 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, fontSize: 14 }}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity} style={{ padding: 5, backgroundColor: '#ddd' }}>
                        <Text style={{ fontSize: 10 }}>+</Text>
                    </TouchableOpacity>
                    <ImageButton
                        onPress={deleteItemFromCart}
                        source={require('./assets/dustbin.png')} // Replace with the path to your dustbin icon
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 25,
                            top: 3
                        }}
                    />
                    <Text style={{
                        position: 'absolute',
                        color: '#1d1d1f',
                        fontSize: 14,
                        fontFamily: 'NunitoRegular',
                        fontWeight: '700',
                        textAlign: 'center',
                        top: 5,
                        left: 120

                    }}>
                        1000 RS
                    </Text>
                    <View style={{
                        position: 'absolute',
                        top: 60,
                        left: -145,
                        width: 333,
                        height: 2,
                        backgroundColor: '#c2c2c2',
                        borderRadius: 2,
                    }} />
                </View>
            </ScrollView>
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                textAlign: 'center',
                top: 425,
                left: 25

            }}>
                Total
            </Text>
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '700',
                textAlign: 'center',
                top: 425,
                left: 250

            }}>
                3000 RS
            </Text>
            <TouchableOpacity onPress={() => { }} style={{
                position: 'absolute',
                cursor: 'pointer',
                alignSelf: 'center',
                //left: 35,
                top: 515,
                width: 300,
                height: 48,
                fontWeight: 500,
                backgroundColor: 'red',
                borderColor: '#1d1d1f',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{
                    position: 'absolute',
                    fontFamily: 'NunitoRegular',
                    fontWeight: '700',
                    fontSize: 18,
                    left: 110,
                    color: 'white',
                }}>
                    Checkout
                </Text>
            </TouchableOpacity>

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 10,
        marginBottom: 80,
    },
    Image: {
        width: 100,
        height: 80,
        left: 10,
        top: -50,
        borderRadius: 12,
        marginBottom: 45
    },
});

export default CartScreen;
