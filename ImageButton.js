import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ onPress, source, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={source} style={style} />
        </TouchableOpacity>
    );
};

export default ImageButton;