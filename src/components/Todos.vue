<script setup lang="ts">
import TodoItem from './TodoItem.vue';

const props = defineProps({
  todos: Array
})

console.log(props, 'props upper')

</script>
<template>
  <div v-for="(todo) in props.todos">
    <TodoItem :data="todo" />
  </div>
</template>
