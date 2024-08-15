import { useState } from 'react';

export default function ToDoList() {

    const [tasks, setTasks] = useState(['Walk the dog', 'Buy groceries', 'Go to the gym']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {


    }

    function addTask() {

    }

    function deleteTask() { }

    function moveTaskUp(index) { };


    function moveTaskDown() { };



    return (
        <div>ToDoList</div>
    );
}