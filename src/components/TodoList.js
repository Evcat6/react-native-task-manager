import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TodoItem } from '.';
import { updateTask } from '../utils/database';


const TodoList = ({tasks, setTasks}) => {

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Incomplete</Text>
            <View style={styles.tasksContainer} >
                {tasks.filter((task) => task.completed === false).map((task) => (<TodoItem key={task.id} checkboxChager={() => updateTask(task, setTasks)} task={task} incompleted={true} />))}
            </View>
            <Text style={styles.title} >Completed</Text>
            <View style={styles.tasksContainer} >
                {tasks.filter((task) => task.completed === true).map((task) => (<TodoItem key={task.id} checkboxChager={() => updateTask(task, setTasks)} task={task} />))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    container : {
        width: 343,
        marginTop: 20,
    },
    tasksContainer: {
        marginBottom: 20,
    }
});

export default TodoList;