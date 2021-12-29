<script setup lang="ts">
import { reactive, defineProps, ref } from 'vue'
import { saveTo } from '../utils/Storage'

const props = defineProps({
  todos: Array
})

const initialValue = {
  title: "",
  content: ""
}

const formData = reactive(initialValue)



const handleForm = () => {
  const newTodo = { ...formData, createdAt: Date.now() }
  const modified = props.todos;
  modified!.push(newTodo)
  saveTo(modified)
}

</script>
<template>
  <form>
    <div>
      <input v-model="formData.title" type="text" placeholder="title" />
    </div>
    <div>
      <textarea v-model="formData.content" placeholder="Your message" cols="30" rows="10"></textarea>
    </div>
    <button @click.prevent="handleForm" type="submit">Save</button>
  </form>
</template>