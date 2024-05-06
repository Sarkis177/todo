import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SInput, SButton } from '../assets/styles/app.styles';

interface TodoFormProps {
    addTodo: (value: string) => void;
}

export function TodoForm({ addTodo }: TodoFormProps) {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (value !== '') {
            addTodo(value);
        } else {
            return;
        }

        setValue('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <SInput type='text' placeholder='New todo...' onChange={handleChange} value={value} />
            <SButton type='submit'>Add</SButton>
        </form>
    );
}
