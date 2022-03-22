<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/users'
import { useProjectStore } from '~/stores/projects'

onBeforeMount(async() => {
  const router = useRouter()
  const userStore = useUserStore()
  const token = window.localStorage.getItem('token')
  const store = useProjectStore()
  if (token)
    userStore.token = token
  const username = window.localStorage.getItem('username')

  if (token && username)
    await router.push(`/hi/${encodeURIComponent(username)}`)
    // fetch project[0].id
  await store.fetchIssuesInProgress()
  await store.fetchClosedIssues()
})

</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
</template>
