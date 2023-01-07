import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({tasks}) => {
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <View style={styles.header} >
            <Text style={styles.dateTitle} >{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</Text>
            <Text style={styles.status} >{tasks.filter(task => task.completed === false).length} incomplete, {tasks.filter(task => task.completed === true).length} completed</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        marginTop: 40,
        borderColor: '#141419',
        borderBottomColor: '#575767',
        borderWidth: 1,
        width: 343,
    },
    dateTitle: {
      color: '#DADADA',
      fontSize: 32,
      fontWeight: 'bold'
    },
    status: {
        color: '#575767',
        fontSize: 14,
        fontWeight: '600'
    }
  });

export default Header;