<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProjectStore } from '~/stores/projects'

onBeforeMount(async() => {
  const router = useRouter()
  const token = window.localStorage.getItem('token')
  const username = window.localStorage.getItem('username')
  const store = useProjectStore()

  if (token && username)

    await router.push(`/hi/${encodeURIComponent(username)}`)
    // fetch project[0].id
  await store.fetchProjects()
  await store.fetchOpenIssues('userId', 'store.getProjects[0]')
  await store.fetchIssuesInProgress()
  await store.fetchIssuesToBeReviewed()
  await store.fetchClosedIssues()
})

</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
</template>
