"use client";

import React, { useState, useEffect } from "react";
import MainLayout from "../../../../components/layouts/MainLayout";
import styles from "./page.module.scss";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditing?: boolean;
}

interface Timer {
  id: number;
  duration: number; // in minutes
  timeLeft: number; // in seconds
  isRunning: boolean;
  isPaused: boolean;
}

const TodoAppPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editingText, setEditingText] = useState("");
  const [timers, setTimers] = useState<Timer[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (timer.isRunning && !timer.isPaused && timer.timeLeft > 0) {
            return { ...timer, timeLeft: timer.timeLeft - 1 };
          }
          return timer;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo: Todo) => {
    setTodos(
      todos.map((t) => ({ ...t, isEditing: t.id === todo.id ? true : false }))
    );
    setEditingText(todo.text);
  };

  const saveEdit = (id: number) => {
    if (editingText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, text: editingText.trim(), isEditing: false }
            : { ...todo, isEditing: false }
        )
      );
    }
  };

  const cancelEdit = () => {
    setTodos(todos.map((todo) => ({ ...todo, isEditing: false })));
    setEditingText("");
  };

  const startTimer = (duration: number) => {
    // Stop all other timers
    setTimers((prevTimers) =>
      prevTimers.map((timer) => ({
        ...timer,
        isRunning: false,
        isPaused: false,
      }))
    );

    // Start new timer
    const newTimer: Timer = {
      id: Date.now(),
      duration,
      timeLeft: duration * 60,
      isRunning: true,
      isPaused: false,
    };
    setTimers([newTimer]);
  };

  const pauseTimer = (id: number) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id ? { ...timer, isPaused: !timer.isPaused } : timer
      )
    );
  };

  const resetTimer = (id: number) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id
          ? {
              ...timer,
              timeLeft: timer.duration * 60,
              isRunning: false,
              isPaused: false,
            }
          : timer
      )
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const handleEditKeyPress = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Todo App</h1>
          <p>A simple todo application with local storage</p>
        </div>

        <div className={styles.todoApp}>
          <div className={styles.timerSection}>
            <h3>Timers</h3>
            <div className={styles.timers}>
              <button
                onClick={() => startTimer(15)}
                className={styles.timerButton}
              >
                15 min
              </button>
              <button
                onClick={() => startTimer(30)}
                className={styles.timerButton}
              >
                30 min
              </button>
              <button
                onClick={() => startTimer(60)}
                className={styles.timerButton}
              >
                60 min
              </button>
            </div>
            {timers.length > 0 && timers[0].isRunning && (
              <div className={styles.activeTimer}>
                <div className={styles.timerDisplay}>
                  {formatTime(timers[0].timeLeft)}
                </div>
                <div className={styles.timerControls}>
                  <button
                    onClick={() => pauseTimer(timers[0].id)}
                    className={styles.timerControl}
                  >
                    {timers[0].isPaused ? "Resume" : "Pause"}
                  </button>
                  <button
                    onClick={() => resetTimer(timers[0].id)}
                    className={styles.timerControl}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={styles.inputSection}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new todo..."
              className={styles.input}
            />
            <button onClick={addTodo} className={styles.addButton}>
              Add
            </button>
          </div>

          <div className={styles.todoList}>
            {todos.length === 0 ? (
              <div className={styles.empty}>
                <p>No todos yet. Add one above!</p>
              </div>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`${styles.todoItem} ${
                    todo.completed ? styles.completed : ""
                  }`}
                  onClick={() => !todo.isEditing && startEditing(todo)}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleTodo(todo.id);
                    }}
                    className={styles.checkbox}
                  />
                  {todo.isEditing ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyPress={(e) => handleEditKeyPress(e, todo.id)}
                      onBlur={() => saveEdit(todo.id)}
                      className={styles.editInput}
                      autoFocus
                    />
                  ) : (
                    <span className={styles.todoText}>{todo.text}</span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.id);
                    }}
                    className={styles.deleteButton}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          {todos.length > 0 && (
            <div className={styles.stats}>
              <span>
                {todos.filter((todo) => !todo.completed).length} of{" "}
                {todos.length} remaining
              </span>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TodoAppPage;
