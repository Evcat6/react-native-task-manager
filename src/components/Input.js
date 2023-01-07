import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({placeholder, value, ...props}) => {
    return <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        placeholderTextColor="#fff"  
        value={value}
        {...props}
        />;
}

const styles = StyleSheet.create({
    input: {
        color: 'white',
        borderColor: '#515CC6',
        borderWidth: 2,
        paddingVertical: 5,
        width: 200,
        paddingLeft: 10,
        borderRadius: 5
    }
});

export default Input;