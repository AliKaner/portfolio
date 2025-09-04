import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../lib/supabaseClient";
import { Todo } from "../../../lib/types";
import TodoItem from "../TodoItem/TodoItem";
import Loader from "../../commons/Loader";
import styles from "./TodoList.module.scss";

const fetchTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

const TodoList: React.FC = () => {
  const {
    data: todos,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error loading todos: {error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  if (!todos || todos.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No todos found. Create your first todo!</p>
      </div>
    );
  }

  return (
    <div className={styles.todoList}>
      <h2 className={styles.title}>Your Todos</h2>
      <div className={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
