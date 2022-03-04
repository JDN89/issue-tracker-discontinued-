<script setup lang="ts">
import draggable from 'vuedraggable'

import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()

watch(store.getOpenIssues!, async(value) => {
  await store.updateOpenIssuesDb(value)
})

</script>

<template>
  <draggable

    :list="store.getOpenIssues!"
    group="Issues"
    item-key="id"
    ghost-class="ghost"
    animation=" 100"
  >
    <template #item="{ element }">
      <div class=" square-border border-shadow m-2 ">
        <IssueCard :title="element.title" :urgency="element.urgency" :date="element.date" :type="element.type" />
      </div>
    </template>
  </draggable>
</template>
