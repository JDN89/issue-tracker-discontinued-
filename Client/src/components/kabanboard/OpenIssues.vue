<script setup lang="ts">
import draggable from 'vuedraggable'

import { useProjectStore } from '~/stores/projects'

const store = useProjectStore()
// beofre leave hook - find the correct lifecycle hook
// store.updateOpenIssueDb
// send the values of the sotredb to backend
// no need to send changes to the backend while your on the page and state gets saved in the store.
// only when you leave the page send update to the db
// update all the dbs

onBeforeUnmount(async() => {
  // seeing that the state is being saved in the pinia store during sessions
  // we only need to send an update of the db design when the session ends -> beforeUnmount
  // what if users loses iternet connection? demo app -> no need to think of this scenario
  // in serious app -> send the new state with each drag event to the db or cach it
  if (store.getOpenIssues) await store.updateOpenIssuesDb(store.getOpenIssues)
  else return null
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
      <div class="m-2 ">
        <IssueCard :title="element.title" :urgency="element.urgency" :date="element.date" :type="element.type" />
      </div>
    </template>
  </draggable>
</template>
