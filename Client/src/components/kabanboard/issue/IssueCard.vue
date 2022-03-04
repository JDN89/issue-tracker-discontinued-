<script setup lang="ts">
import Urgency from './Urgency.vue'
const props = defineProps<{ title: string; urgency: string; date: string; type: string }>()

</script>

<template>
  <div class="square-border">
    <div
      class=" flex justify-between m-3"
    >
      <p class="font-semibold font-sans tracking-wide text-sm">
        {{ props.title }}
      </p>

      <Urgency :urgency="props.urgency">
        {{ props.urgency }}
      </Urgency>
    </div>
    <div class="flex m-2 justify-between items-center">
      <span class="text-sm text-gray-600 dark:text-gray-300">{{ props.date }}</span>

      <Badge :type="props.type">
        {{ props.type }}
      </Badge>
    </div>
  </div>
</template>
