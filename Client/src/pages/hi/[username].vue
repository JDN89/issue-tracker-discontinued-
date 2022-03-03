
<script setup lang="ts">

const props = defineProps<{ username: string }>()

</script>

<template>
  <HeaderUser />

  <div id="container" class="flex flex-row mx-auto justify-center">
    <div id="main" class="order-2 flex-1 h-96 bg-blue-100">
      <h1 text-2xl>
        Hi, {{ props.username }}
      </h1>
      <KabanBoard />
    </div>

    <SideBar />
  </div>
</template>

<route lang="yaml">
meta: {requiresAuth: true}
</route>
