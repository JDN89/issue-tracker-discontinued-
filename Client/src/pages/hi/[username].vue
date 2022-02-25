
<script setup lang="ts">
import HeaderUser from '~/components/HeaderUser.vue'
const props = defineProps<{ username: string }>()

const router = useRouter()

</script>

<template>
  <HeaderUser />

  <h1>Hi, {{ props.username }}</h1>
  <button
    class="btn m-3 text-sm mt-8"
    @click="router.back()"
  >
    Back
  </button>
</template>

<route lang="yaml">
meta: {requiresAuth: true}
</route>
