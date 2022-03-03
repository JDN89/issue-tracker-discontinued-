<script setup lang="ts">
import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()
</script>

<template>
  <div id="sidebar" class="min-w-24 max-w-44 bg-red-400 order-1 flex-1">
    <p>test</p>
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
