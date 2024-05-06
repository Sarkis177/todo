import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SSmallbtn, SInput } from '../assets/styles/app.styles';

interface EditTodoFormProps {
    editTodo: (value: string, id: string) => void;
    task: {
        id: string;
        task: string;
        completed: boolean;
    };
}

export function EditTodoForm({ editTodo, task }: EditTodoFormProps) {
    const [value, setValue] = useState(task.task);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const cancelChange = () => {
        setValue(task.task);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <SInput type='text' placeholder='Update task' onChange={handleChange} value={value} />
            <SSmallbtn type='submit'>Save</SSmallbtn>
            <SSmallbtn onClick={cancelChange} type='submit'>
                Cancel
            </SSmallbtn>
        </form>
    );
}
