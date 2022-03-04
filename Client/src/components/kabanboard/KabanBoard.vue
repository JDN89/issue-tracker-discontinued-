<script setup lang="ts">

</script>

<template>
  <div id="Kaban-Board" class="flex justify-between flex-1 rounded-border flex-grow-1 flex-shrink-0 flex-row">
    <div class="flex-1 min-w-34 max-w-60 order-1 min-h-lg max-h-screen ">
      <h1 text-3xl>
        openIssue
      </h1>
      <OpenIssues />
    </div>
    <div class="flex-1 min-w-34 max-w-60 order-1 min-h-lg max-h-screen ">
      <h1 text-3xl>
        In Progress
      </h1>
      <IssuesInProgress />
    </div>
  </div>
</template>

<style scoped></style>
