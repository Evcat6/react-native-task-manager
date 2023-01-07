import { React, useState } from 'react';
import { StyleSheet, View, Modal, Text, Alert } from 'react-native';
import { TodoButton, CloseButton, EditButton, Input } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskDetailsOpenAction, clearTaskDataAction } from '../store/actions';
import { deleteTask, updateTaskDetails } from '../utils/database';


const TaskDetailsWindow = ({setTasks}) => {
    const dispatch = useDispatch();
    const [ editTask, setEditTask ] = useState({title: false, type: false});
    const taskOpened = useSelector(state => state.taskDetails.taskDetailsOpen);
    const task = useSelector(state => state.taskDetails.taskData);
    const [ title, setTitle ] = useState('');
    const [ type, setType ] = useState('');

    const updateTask = () => {
        if(title || type) {
            const updateUser = {
                title: title? title : task.title,
                type: type? type : task.type, 
                id: task.id
            }
            updateTaskDetails(updateUser, setTasks);
            dispatch(updateTaskDetailsOpenAction())
            setEditTask({title: false, type: false})
            setTitle('')
            setType('')
        }else {
            Alert.alert('Please change task!')
        }
    }
    return (
    <Modal
        visible={taskOpened} 
        transparent={true}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modal} >
                <View style={styles.modalDetails}>
                    <CloseButton
                        style={styles.close}
                        onPress={() => {
                            dispatch(updateTaskDetailsOpenAction());
                            dispatch(clearTaskDataAction());
                            setEditTask({title: false, type: false})
                            setTitle('')
                            setType('')
                        }}
                    />
                    <Text style={styles.title} >Task Details</Text>
                    <View>
                        <View style={styles.editInput} >
                        {editTask.title? 
                            <>
                            <View style={styles.item} >
                                <Input value={title} onChangeText={setTitle} />
                            </View>
                            </>
                            : 
                            <>
                            <Text style={styles.item} >{task.title}</Text>
                            </>
                        }
                        <EditButton style={styles.editButton} onPress={() => setEditTask({...editTask, title: !editTask.title})} />
                        </View>
                        <View style={styles.editInput} >
                        {editTask.type?
                            <>
                                <View style={styles.item} >
                                    <Input value={type} onChangeText={setType} />
                                </View>
                            </>
                            : 
                            <>
                                <Text style={styles.item} >{task.type}</Text>
                            </>
                        }
                        <EditButton style={styles.editButton} onPress={() => setEditTask({...editTask, type: !editTask.type})} />
                        </View>

                    </View>
                    <View style={styles.buttonsContainer} >
                        <TodoButton title='Delete' onPress={() => {
                            deleteTask(task.id, setTasks);
                            dispatch(updateTaskDetailsOpenAction())
                        }}
                        />
                        <TodoButton title='Edit' onPress={updateTask}
                        />
                    </View>
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
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'white'
    },
    item: {
        color: 'white',
        fontSize: 22,
        paddingVertical: 8
    },
    editInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    editButton: {
        marginLeft: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
    }
})

export default TaskDetailsWindow;