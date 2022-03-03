
<script setup lang="ts">

const props = defineProps<{ username: string }>()

</script>

<template>
  <HeaderUser />

  <div id="container" class="flex flex-row mx-auto justify-center py-10">
    <div id="main" class="order-2 flex-1 h-96">
      <h1 text-2xl pb-3>
        Hi, {{ props.username.toUpperCase() }}
      </h1>
      <KabanBoard />
    </div>

    <SideBar pt-7 mr-7 />
  </div>
</template>

<route lang="yaml">
meta: {requiresAuth: true}
</route>
