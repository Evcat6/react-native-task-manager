import { Pressable, Text, StyleSheet } from 'react-native';

const TodoButton = ({title, ...props}) => {
    return (
        <Pressable style={styles.button} {...props} >
            <Text style={styles.text} >{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#515CC6',
        paddingHorizontal: 20,
        height: 50
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default TodoButton;