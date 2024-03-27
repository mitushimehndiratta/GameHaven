import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import ImageButton from './ImageButton.js';
import { useNavigation } from '@react-navigation/native';
import SearchBar from './SearchBar';

const Find = () => {
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
    const handleCart = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            //justifyContent: 'center',
        }}>
            {/* Include the SearchBar component */}
            <SearchBar onSearch={(searchText) => console.log('Search Text:', searchText)} />

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
                        source={require('./assets/home.png')}
                        style={{ width: 22, height: 22, left: 15 }}
                    />
                    <Text style={{ left: 15 }}>Home</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={handleCart}
                        source={require('./assets/cart.png')}
                        style={{ width: 22, height: 22, left: 8 }}
                    />
                    <Text style={{ left: 8 }}>Cart</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={() => { }}
                        source={require('./assets/search.png')}
                        style={{ width: 22, height: 22, left: 3 }}
                    />
                    <Text style={{ left: 3 }}>Find</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ImageButton
                        onPress={() => { }}
                        source={require('./assets/user.png')}
                        style={{ width: 22, height: 22, left: -10 }}
                    />
                    <Text style={{ left: -10 }}>Profile</Text>
                </View>
            </View>
        </View>
    );
}

export default Find;
