"use client";
import { TodoHydrate } from "@/lib/store/entities/todoswithapi";
import { useAppSelector, useAppStore } from "@/lib/store/hooks";
import { TodosResponse } from "@/lib/todoapi";
import React, { useRef } from "react";

type todoType = {
  data: TodosResponse;
};
export function Todo({ data }: todoType) {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(TodoHydrate(data));
    initialized.current = true;
  }
  const todos = useAppSelector((state) => state.todoswithapi.list);
  return (
    <div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}
