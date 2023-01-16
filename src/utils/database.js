import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app.db');

export const createTables = () => {
    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, type TEXT, completed BOOLEAN);');
        tx.executeSql('DELETE FROM tasks WHERE title IS NULL;');
    })
}

export const getTasksFromDb = (callback) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM tasks',
        null, 
        (txtObj, { rows: { _array }}) => {
            _array.map((element) => element.completed = Boolean(element.completed));
            callback(_array)
        })
    })
}

export const updateTask = (todo, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'UPDATE tasks SET completed = ? WHERE id = ?;', 
            [!todo.completed, todo.id]
        )
    })
    getTasksFromDb(callback);
}

export const createTask = (title, type, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO tasks (title, type, completed) VALUES (?, ?, ?)',
            [title, type, false]
        );
    });
    getTasksFromDb(callback);
}

export const deleteTask = (id, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM tasks WHERE id = ?',
            [id]
        );
    });
    getTasksFromDb(callback);
}

export const updateTaskDetails = (task, callback) => {
    db.transaction(tx => {
        tx.executeSql('UPDATE tasks SET title = ?, type = ? WHERE id = ?', [task.title, task.type, task.id]);
    });
    getTasksFromDb(callback);
}