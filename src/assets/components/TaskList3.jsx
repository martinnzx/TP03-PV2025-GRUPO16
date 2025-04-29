import React from 'react';
import TaskItem3 from './TaskItem3';

function TaskList3({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem3
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList3;