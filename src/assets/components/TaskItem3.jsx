import React from 'react';

function TaskItem3({ task, onToggleTask, onDeleteTask }) {
  return (
    <li style={{
      marginBottom: '10px',
      textDecoration: task.completed ? 'line-through' : 'none',
    }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        style={{ marginRight: '10px' }}
      />
      <button
        onClick={() => onDeleteTask(task.id)}
        style={{ marginLeft: '10px' }}
      >
        Eliminar
      </button>
      {task.text}
      
    </li>
  );
}

export default TaskItem3;
