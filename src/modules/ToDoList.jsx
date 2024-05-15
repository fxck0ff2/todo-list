import { useState } from "react"

export default function ToDoList(params) {
  const [tasks, setTask] = useState(['перша задача', 'Друга задача']);
  const [newTask, setNewTask] = useState('');


  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      for (let i = 0; i < tasks.length; i++) { 
        if (tasks[i] === newTask) { // Якщо така задача э в массиві то неї не добавлять
          return;
        }
      }
      setTask([ ...tasks, newTask.trim() ]);
      document.querySelector('input').value = '';
      setNewTask('');
    }
  }

  const handleDeleteTask = (index) => {
    const currentTasks = tasks.filter((_, i) => i !== index);
    setTask(currentTasks);
  }
  return(
    <>
      <div>
        <input type="text" placeholder="Введіть нове завдання" onChange={(e) => setNewTask(e.target.value)}/>
          <button onClick={() => handleAddTask()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"  width="20px" fill="var(--color)">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
            <span>Додати завдання</span>
          </button>
      </div>
      {
        (tasks.length > 0) ? 
        <ul>
        {
          tasks.map((task, index) => { 
            return (
              <>
                <li key={index}>
                  <div>
                    <span>{task}</span>
                    <button onClick={() => handleDeleteTask(index)} className="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                      <span>Видалити виконане завдання</span>
                    </button>
                  </div>
                </li>
                {(index !== tasks.length - 1) ? <hr /> : ''}
              </>
            )
          })
        }
      </ul>
      : 
      <h3>Список пустий</h3> // Якщо нема элементів в масиві вивести це текст 
      
      }
    </>
  )
};
