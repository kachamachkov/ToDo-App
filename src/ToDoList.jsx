import { useState } from 'react';

export default function ToDoList() {

    const [tasks, setTasks] = useState(['Walk the dog', 'Buy groceries', 'Go to the gym']);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);

    }

    function addTask() {

        if (newTask.trim() == '') {
            return;
        }

        if (newTask.length >= 40) {
            setError('Please enter a task that is less than 40 characters long.');
            return;
        }
        setTasks(t => [...t, newTask.trim()]);
        setNewTask('');

    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    };


    function moveTaskDown(index) {

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);

        }
    };



    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                    placeholder={"Enter a new task..."}
                    value={newTask}
                    onChange={handleInputChange}

                />

                <button
                    className='add-button'
                    onClick={addTask}

                >
                    Add
                </button>

                <div className='error'>
                    {error}
                </div>
            </div>



            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>

                )}
            </ol>
        </div>
    );
}