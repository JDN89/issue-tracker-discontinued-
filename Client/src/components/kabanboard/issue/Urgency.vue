<script setup lang="ts">
const props = defineProps<{ urgency: string } >()

const myUrgencyColorMap = new Map<string, string>([['low', 'text-yellow-800 bg-yellow-100'], ['medium', 'text-orange-800 bg-orange-200'], ['high', 'text-red-800 bg-red-200']])

const urgencyColor = computed(() => {
  return myUrgencyColorMap.get(props.urgency)!
})

</script>
<template>
  <div
    class=" px-3 h-6 rounded-full text-xs font-semibold flex items-center "
    :class="`${urgencyColor}` "
  >
    <span class="w-2 h-2 rounded-full mr-1" />
    <span>
      <slot />
    </span>
  </div>
</template>
