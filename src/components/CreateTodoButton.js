import { StyleSheet, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { updateModalAction } from '../store/actions'

const CreateTodoButton = () => {
    const dispatch = useDispatch();
    return (
        <Pressable style={styles.button} onPress={() => dispatch(updateModalAction())}>
        <Text style={styles.text}><Icon name='plus' size={25} /></Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        elevation: 3,
        backgroundColor: '#515CC6',
        width: 56,
        height: 56
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
  });

export default CreateTodoButton;