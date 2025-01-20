import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { SButtonShow, STaskRem } from '../assets/styles/app.styles';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../models/models';

uuidv4();

export function TodoWrapper() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [displayedTodos, setDisplayedTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const loadedTodos = JSON.parse(localStorage.getItem('todos') || '[]');

        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    useEffect(() => {
        setDisplayedTodos(todos);
    }, [todos]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toDoCompleted = (id: string) => {
        const updatedTodos = [...todos].map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const editTodo = (id: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    };

    const editTask = (task: string, id: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
    };

    const showAllTasks = () => setDisplayedTodos(todos);

    const showActiveTasks = () => setDisplayedTodos(todos.filter(todo => !todo.completed));

    const showCompletedTasks = () => setDisplayedTodos(todos.filter(todo => todo.completed));

    
    const countString = `${todos.length} ${todos.length === 1 ? 'task' : 'tasks'} remaining`;

    return (
        <div>
            <h1>Todo</h1>
            <TodoForm addTodo={addTodo} />
            <SButtonShow onClick={showAllTasks}>Show All tasks</SButtonShow>
            <SButtonShow onClick={showActiveTasks}>Show Active tasks</SButtonShow>
            <SButtonShow onClick={showCompletedTasks}>Show Completed tasks</SButtonShow>
            <STaskRem>{countString}</STaskRem>
            {displayedTodos.map((todo, id) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        task={todo}
                        toDoCompleted={toDoCompleted}
                        key={id}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            )}
        </div>
    );
}
