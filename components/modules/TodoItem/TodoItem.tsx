import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../lib/supabaseClient";
import { Todo, UpdateTodoRequest, DeleteTodoRequest } from "../../../lib/types";
import Button from "../../commons/Button";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation({
    mutationFn: async (request: UpdateTodoRequest) => {
      const { data, error } = await supabase
        .from("todos")
        .update({
          title: request.title,
          completed: request.completed,
          updated_at: new Date().toISOString(),
        })
        .eq("id", request.id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (request: DeleteTodoRequest) => {
      const { error } = await supabase
        .from("todos")
        .delete()
        .eq("id", request.id);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleToggleComplete = () => {
    updateTodoMutation.mutate({
      id: todo.id,
      completed: !todo.completed,
    });
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoMutation.mutate({ id: todo.id });
    }
  };

  return (
    <div
      className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}
    >
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className={styles.checkbox}
          disabled={updateTodoMutation.isPending}
        />
        <span className={styles.title}>{todo.title}</span>
      </div>
      <div className={styles.actions}>
        <Button
          variant="danger"
          size="sm"
          onClick={handleDelete}
          disabled={deleteTodoMutation.isPending}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
