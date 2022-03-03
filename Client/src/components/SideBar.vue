<script setup lang="ts">
import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()
</script>

<template>
  <div id="sidebar" class="min-w-24 max-w-44 order-1 flex-1">
    <h1 text-3xl py-3>
      My Projects
    </h1>
    <ul>
      <li v-for="project in store.getProjects" :key="project.id" class="square-border">
        {{ project.title }}
      </li>
    </ul>
    <button btn>
      add project
    </button>
  </div>
</template>
