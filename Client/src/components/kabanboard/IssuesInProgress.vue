<script setup lang="ts">
import draggable from 'vuedraggable'

import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()

watch(store.getIssuesInProgress!, async(value) => {
  await store.updateIssueInProgressDb(value)
})

</script>

<template>
  <draggable

    :list="store.getIssuesInProgress!"
    group="Issues"
    item-key="id"
    ghost-class="ghost"
    animation=" 100"
  >
    <template #item="{ element }">
      <div class="m-2 ">
        <IssueCard :title="element.title" :urgency="element.urgency" :date="element.date" :type="element.type" />
      </div>
    </template>
  </draggable>
</template>
