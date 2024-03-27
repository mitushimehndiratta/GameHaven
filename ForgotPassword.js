import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreenScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const navigation = useNavigation();

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
                    width: 200,
                    height: 200,
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
                top: 233,
            }}>
                GameHaven
            </Text>
            {/* Rectangle to enter your Email */}
            <View style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 15,
                top: 355,
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
            <Text style={{
                position: 'absolute',
                color: '#1d1d1f',
                fontSize: 16,
                fontFamily: 'NunitoRegular',
                fontWeight: '500',
                textAlign: 'center',
                top: 285,
            }}>
                Enter your Email below, and we will send you a password reset link!
            </Text>

            {/* Rectangle for password */}
            {/* <View style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 15,
                top: 370,
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
            <TouchableOpacity onPress={handleSignup} style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 15,
                top: 460,
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
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
}


export default ForgotPasswordScreenScreen;
