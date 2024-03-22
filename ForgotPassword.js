import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

const ForgotPasswordScreen = () => {
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
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {/* <Image
                source={require('./assets/LoginPage.jpg')}
                style={{
                    position: 'absolute',
                    top: 20,
                    width: 128,
                    height: 128,
                }}
                resizeMode="contain"
            /> */}
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
            {/* <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 18,
                fontFamily: 'NunitoRegular',
                fontWeight: '600',
                textAlign: 'center',
                top: 210,

            }}>
                Discover fun games to play!
            </Text> */}

            {/* Rectangle to enter your Email */}

        </View>
    );
}
export default ForgotPasswordScreen;