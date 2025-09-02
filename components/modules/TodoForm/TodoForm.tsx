import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../lib/supabaseClient";
import { CreateTodoRequest } from "../../../lib/types";
import Button from "../../commons/Button";
import Input from "../../commons/Input";
import styles from "./TodoForm.module.scss";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const createTodoMutation = useMutation({
    mutationFn: async (request: CreateTodoRequest) => {
      const { data, error } = await supabase
        .from("todos")
        .insert({
          title: request.title,
          completed: false,
        })
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTitle("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      createTodoMutation.mutate({ title: title.trim() });
    }
  };

  return (
    <div className={styles.todoForm}>
      <h2 className={styles.title}>Add New Todo</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          placeholder="Enter todo title..."
          value={title}
          onChange={setTitle}
          disabled={createTodoMutation.isPending}
          required
          className={styles.input}
        />
        <Button
          type="submit"
          variant="success"
          disabled={createTodoMutation.isPending || !title.trim()}
          className={styles.button}
        >
          {createTodoMutation.isPending ? "Adding..." : "Add Todo"}
        </Button>
      </form>
      {createTodoMutation.isError && (
        <div className={styles.error}>
          Error: {createTodoMutation.error.message}
        </div>
      )}
    </div>
  );
};

export default TodoForm;
