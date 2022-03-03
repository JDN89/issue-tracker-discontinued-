<script setup lang="ts">
import draggable from 'vuedraggable'

import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()

watch(store.getOpenIssues!, (value) => {
  store.updateOpenIssuesDb(value)
})
</script>

<template>
  <div id="Kaban-Board" class="flex flex-1 rounded-border flex-grow-1 flex-shrink-0 flex-row bg-yellow-300">
    <div id="Open" class="flex-1 min-w-34 max-w-52 bg-green-400 order-1 min-h-lg max-h-screen ">
      <h1 text-3xl>
        openIssue
      </h1>

      <draggable

        :list="store.getOpenIssues!"
        group="Issues"
        item-key="id"
      >
        <template #item="{ element }">
          <div
            class="square-border my-2"
          >
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
