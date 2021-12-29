<script setup lang="ts">
import AddTodo from './components/AddTodo.vue';
import Todos from './components/Todos.vue';
import { loadFromLS } from "./utils/Storage"

export interface todoQuery {
  title: string,
  content: string,
  createdAt?: number
}

const todos: todoQuery[] | [] = loadFromLS('formData') || []
</script>

<template>
  <div>
    <h1>Vite + Vue3 + TS Todolist</h1>
    <AddTodo :todos="todos"/>
    <Todos :todos="todos"/>
  </div>
</template>
