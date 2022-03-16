<script setup lang="ts">
import draggable from 'vuedraggable'

import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()
onBeforeUnmount(async() => {
  if (store.getClosed) await store.updateClosedIssues(store.getClosed)
  else return null
})
</script>

<template>
  <draggable

    :list="store.getClosed!"
    group="Issues"
    item-key="id"
    ghost-class="ghost"
    animation=" 400"
  >
    <template #item="{ element }">
      <div class="m-4 ">
        <IssueCard :title="element.title" :urgency="element.urgency" :date="element.date" :type="element.type" />
      </div>
    </template>
  </draggable>
</template>
