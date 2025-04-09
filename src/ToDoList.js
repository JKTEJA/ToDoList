import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
 const [tasks, setTasks] = useState(["Eggs", "Milk", "Cheese"]);
 const [input, setInput] = useState("");
 const [editingIndex, setEditingIndex] = useState(null);
 const [editInput, setEditInput] = useState("");

 const addTask = () => {
  if (input.trim()) {
   setTasks([...tasks, input]);
   setInput("");
  }
 };

 const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
 };

 const editTask = (index) => {
  setEditingIndex(index);
  setEditInput(tasks[index]);
 };

 const saveTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index] = editInput;
  setTasks(updatedTasks);
  setEditingIndex(null);
 };

 const clearList = () => {
  setTasks([]);
 };

 return (
  <div className="todo-container">
   <h2>Grocery Shopping</h2>
   <ul className="task-list">
    {tasks.map((task, index) => (
     <li key={index} className="task-item">
      {editingIndex === index ? (
       <inputimport React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eggs", "Milk", "Cheese"]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [error, setError] = useState(null);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    } else {
      setError("Task cannot be empty");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditInput(tasks[index]);
  };

  const saveTask = (index) => {
    if (editInput.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editInput;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setError("Task cannot be empty");
    }
  };

  const clearList = () => {
    setTasks([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h2>Grocery Shopping</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editingIndex === index ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                onBlur={() => saveTask(index)}
                autoFocus
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span className="task-text">{task}</span>
            )}
            <div className="task-buttons">
              <button className="delete" onClick={() => deleteTask(index)}>🗑</button>
              <button className="edit" onClick={() => editTask(index)}>✏</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add something to your list"
          onKeyPress={handleKeyPress}
        />
        <button className="add" onClick={addTask}>Add</button>
      </div>
      <button className="clear" onClick={clearList}>Delete List</button>
    </div>
  );
};

export default ToDoList;
        type="text"
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
        onBlur={() => saveTask(index)}
        autoFocus
       />
      ) : (
       <span className="task-text">{task}</span>
      )}
      <div className="task-buttons">
       <button className="delete" onClick={() => deleteTask(index)}>🗑</button>
       <button className="edit" onClick={() => editTask(index)}>✏</button>
      </div>
     </li>
    ))}
   </ul>
   <div className="input-container">
    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add something to your list" />
    <button className="add" onClick={addTask}>Add</button>
   </div>
   <button className="clear" onClick={clearList}>Delete List</button>
  </div>
 );
};

export default ToDoList;