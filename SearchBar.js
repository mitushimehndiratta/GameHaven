import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // Call the onSearch callback function and pass the search text
        onSearch(searchText);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                onChangeText={(text) => setSearchText(text)}
                onSubmitEditing={handleSearch}
                value={searchText}
            />
            <Ionicons name="search" size={24} color="black" style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    icon: {
        marginLeft: 10,
    },
});

export default SearchBar;
