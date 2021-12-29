<script setup lang="ts">
import {defineProps, withDefaults} from 'vue'

export interface props {
  data: {
      title: string,
  content: string,
  createdAt?: number
  }
}

const props = defineProps<props>()
console.log(props)
</script>

<template v-if="props">
<div class="flex border">
  <p>dupa</p>
  <h3>{{ props.data.title }}</h3>
  <p>{{ props.data.content }}</p>
  <span>{{ props.data.createdAt }}</span>
</div>
</template>

