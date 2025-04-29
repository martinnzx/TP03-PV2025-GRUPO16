import React, { useState } from 'react';

function TaskInput3({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
        style={{paddingRight: 50}}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskInput3;
