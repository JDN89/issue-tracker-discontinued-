<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()

onBeforeMount(async() => {
  const router = useRouter()
  const token = window.localStorage.getItem('token')
  const username = window.localStorage.getItem('username')

  if (token && username)

    await router.push(`/hi/${encodeURIComponent(username)}`)
  await store.fetchOpenIssues()
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
