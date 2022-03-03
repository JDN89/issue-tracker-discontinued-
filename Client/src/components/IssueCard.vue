<script setup lang="ts">
const props = defineProps<{ title: string; urgency: string; date: string; type: string }>()

const myMap = new Map<string, string>([['Design', 'purple'], ['Feature Request', 'teal'], ['Backend', 'blue'], ['QA', 'green'], ['default', 'teal']])

console.log(myMap)

// const type = (props.type)

// const useBadgeColor = computed(() => {
//   return badgecolor.[type] || badgecolor.default
// })

//   computed: {
//     badgeColor() {
//       const mappings = {
//         Design: "purple",
//         "Feature Request": "teal",
//         Backend: "blue",
//         QA: "green",
//         default: "teal"
//       };
//       return mappings[this.task.type] || mappings.default;
//     }
//   }
</script>

<template>
  <div
    class=" flex justify-between "
  >
    <p class="font-semibold font-sans tracking-wide text-sm">
      {{ props.title }}
    </p>

    <p class="bg-gray-200">
      {{ props.urgency }}
    </p>
  </div>
  <div class="flex mt-4 justify-between items-center">
    <span class="text-sm text-gray-600">{{ props.date }}</span>

    <!-- <Badge v-if="props.type" :color="myMap[props.type]" :class="`bg-${badgeColor}-100`">
      {{ props.type }}
    </Badge> -->
  </div>
</template>
