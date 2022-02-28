<script setup lang="ts">

import { useRouter } from 'vue-router'

onBeforeMount(async() => {
  console.log('this works')
  const router = useRouter()
  const token = window.localStorage.getItem('token')
  const username = window.localStorage.getItem('username')

  if (token && username)

    await router.push(`/hi/${encodeURIComponent(username)}`)
})

</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
</template>
