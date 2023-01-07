import React, { useState } from 'react';
import { View, Modal, StyleSheet, Alert, Text } from 'react-native'; 
import { updateModalAction } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { TodoButton, CloseButton } from '.';
import { createTask } from '../utils/database';
import { Input } from '.';

const ModalWindow = ({setTasks}) => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal.modalOpen);
    const [ title, setTitle ] = useState('');
    const [ type, setType ] = useState('');

    const addTask = () => {
        if(title === '' || type === '') {
            Alert.alert("Please fill all inputs!");
        } else {
            createTask(title, type, setTasks);
            dispatch(updateModalAction());
        }
        setTitle('');
        setType('');
    }


    return (
        <Modal
            visible={modal} 
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal} >
                    <View style={styles.modalDetails}>
                    <CloseButton 
                        style={styles.close} 
                        onPress={() => dispatch(updateModalAction())} 
                    />
                        <Text style={styles.title} >Create New Task</Text>
                        <View>
                            <View style={styles.inputContainer} >
                                <Input placeholder='Enter the title' value={title} onChangeText={setTitle}/>
                            </View>
                            <View style={styles.inputContainer} >
                                <Input placeholder='Enter the type' value={type} onChangeText={setType}/> 
                            </View>
                        </View>
                        <TodoButton title='create Task' onPress={addTask} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalDetails: {
        width: 350,
        height: 330, 
        backgroundColor: '#454853',
        borderRadius: 9,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        paddingVertical: 30
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    inputContainer: {
        paddingVertical: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'white'
    }
});

export default ModalWindow;