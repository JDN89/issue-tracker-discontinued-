<script setup lang="ts">
const props = defineProps<{ title: string; urgency: string; date: string; type: string }>()

</script>

<template>
  <div
    class=" flex justify-between m-3"
  >
    <p class="font-semibold font-sans tracking-wide text-sm">
      {{ props.title }}
    </p>

    <p>
      {{ props.urgency }}
    </p>
  </div>
  <div class="flex m-2 justify-between items-center">
    <span class="text-sm text-gray-600">{{ props.date }}</span>

    <Badge :type="props.type">
      {{ props.type }}
    </Badge>
  </div>
</template>
