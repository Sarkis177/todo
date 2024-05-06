import React from 'react';
import { STodo, STask, SCheckBox, SSmallbtn } from '../assets/styles/app.styles';

interface TodoProps {
    task: {
        id: string;
        task: string;
        completed: boolean;
    };
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
    toDoCompleted: (id: string) => void;
}

export function Todo({ task, deleteTodo, editTodo, toDoCompleted }: TodoProps) {
    return (
        <STodo>
            <SCheckBox>
                <input type='checkbox' onChange={() => toDoCompleted(task.id)} checked={task.completed} />
                <STask style={{ textDecoration: task.completed ? ' line-through' : undefined }}>{task.task}</STask>
            </SCheckBox>
            <div>
                <SSmallbtn onClick={() => editTodo(task.id)}>Edit</SSmallbtn>
                <SSmallbtn onClick={() => deleteTodo(task.id)}>Delete</SSmallbtn>
            </div>
        </STodo>
    );
}
