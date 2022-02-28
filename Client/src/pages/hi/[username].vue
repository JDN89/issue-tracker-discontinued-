
<script setup lang="ts">
import HeaderUser from '~/components/HeaderUser.vue'
const props = defineProps<{ username: string }>()

</script>

<template>
  <HeaderUser />
  <div class="prose my-4">
    <h1 text-2xl>
      Hi, {{ props.username }}
    </h1>
  </div>

  <h2 my-2 text-xl>
    you're Authorized to access this route
  </h2>
  <p>
    Reload this page and you'll still be logged in and send to this page.
    <br my-1>
    Same for when you go to another webpage and then come back.
    <br my-1>
    Delete token or username from localStorage, and you'll be send to the login page upon leaving or refreshing.
    <br>
    you'll also be unauthorized to access the 'hi/[username].vue' page, until you login again.
  </p>
</template>

<route lang="yaml">
meta: {requiresAuth: true}
</route>
