
<script setup lang="ts">
import HeaderUser from '~/components/HeaderUser.vue'
const props = defineProps<{ username: string }>()

const projects: string[] = ['project 1', 'project 2', 'project 3', ' project 4']

</script>

<template>
  <HeaderUser />

  <div id="container" class="flex flex-row mx-auto justify-center">
    <div id="main" class="order-2 flex-1 prose h-96 bg-blue-100">
      <h1 text-2xl>
        Hi, {{ props.username }}
      </h1>
      <h2 text-2xl>
        Button and container for adding a new project go here
      </h2>
    </div>
    <div id="sidebar" class="min-w-24 max-w-44 bg-red-400 order-1 flex-1">
      <p>test</p>
      <ul>
        <li v-for="project in projects" :key="project" class="border border-dark-50">
          {{ project }}
        </li>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta: {requiresAuth: true}
</route>
