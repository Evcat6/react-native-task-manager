import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { Header, CreateTodoButton } from './src/components';
import TaskDetailsWindow from './src/components/TaskDetailsWindow';
import ModalWindow from './src/components/ModalWindow';
import TodoList from './src/components/TodoList';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { createTables, getTasksFromDb } from './src/utils/database';


export default function App() {

  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    createTables();
    getTasksFromDb(setTasks);
  }, []);

  return (
    <Provider store={store} >
      <View style={styles.container} >
        <ModalWindow setTasks={setTasks} />
        <TaskDetailsWindow setTasks={setTasks} />
        <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.appContainer} >
          <Header tasks={tasks} />
          <TodoList tasks={tasks} setTasks={setTasks} />
        </View>
        </ScrollView>
        <View style={styles.buttonContainer} >
          <CreateTodoButton/>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141419',
    color: 'white',
  },
  appContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  }
});
