import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { addTaskDataAction, updateTaskDetailsOpenAction } from '../store/actions';
import { useDispatch } from 'react-redux';


const TodoItem = ({task, checkboxChager, incompleted = false, ...props}) => {

    const dispatch = useDispatch();

    return (
        <View {...props} style={styles.taskContainer} >
            <Checkbox 
                style={styles.checkbox} 
                value={task.completed} 
                color={'#454853'}
                onValueChange={checkboxChager}
            />
            <View>
                <Text 
                    style={styles.taskTitle} 
                    onPress={() => {
                        dispatch(addTaskDataAction(task));
                        dispatch(updateTaskDetailsOpenAction())
                    }} 
                >
                    {task.title}
                </Text>
                {incompleted && <Text style={styles.taskType} >{task.type}</Text>}
            </View>
        </View>
    )
}

export default TodoItem;


const styles = StyleSheet.create({
    taskTitle: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 8,
        fontWeight: 'bold',
    },
    taskType: {
        color: 'white',
        fontSize: 14,
        marginHorizontal: 6,
    },
    taskContainer: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    checkbox: {
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        marginRight: 10,
        height: 24,
        width: 24,
    }
});

