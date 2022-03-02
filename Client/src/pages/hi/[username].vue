
<script setup lang="ts">
import draggable from 'vuedraggable'
import HeaderUser from '~/components/HeaderUser.vue'

const props = defineProps<{ username: string }>()

const projects: string[] = ['project 1', 'project 2', 'project 3', ' project 4']

// console.log(draggable.data)

// const columns = [
//   {
//     title: 'Backlog',
//     tasks: [
//       {
//         id: 1,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//       {
//         id: 2,
//         title: 'Provide documentation on integrations',
//         date: 'Sep 12',
//       },
//       {
//         id: 3,
//         title: 'Design shopping cart dropdown',
//         date: 'Sep 9',
//         type: 'Design',
//       },
//       {
//         id: 4,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//       {
//         id: 5,
//         title: 'Test checkout flow',
//         date: 'Sep 15',
//         type: 'QA',
//       },
//     ],
//   },
//   {
//     title: 'In Progress',
//     tasks: [
//       {
//         id: 6,
//         title: 'Design shopping cart dropdown',
//         date: 'Sep 9',
//         type: 'Design',
//       },
//       {
//         id: 7,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//       {
//         id: 8,
//         title: 'Provide documentation on integrations',
//         date: 'Sep 12',
//         type: 'Backend',
//       },
//     ],
//   },
//   {
//     title: 'Review',
//     tasks: [
//       {
//         id: 9,
//         title: 'Provide documentation on integrations',
//         date: 'Sep 12',
//       },
//       {
//         id: 10,
//         title: 'Design shopping cart dropdown',
//         date: 'Sep 9',
//         type: 'Design',
//       },
//       {
//         id: 11,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//       {
//         id: 12,
//         title: 'Design shopping cart dropdown',
//         date: 'Sep 9',
//         type: 'Design',
//       },
//       {
//         id: 13,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//     ],
//   },
//   {
//     title: 'Done',
//     tasks: [
//       {
//         id: 14,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//       {
//         id: 15,
//         title: 'Design shopping cart dropdown',
//         date: 'Sep 9',
//         type: 'Design',
//       },
//       {
//         id: 16,
//         title: 'Add discount code to checkout page',
//         date: 'Sep 14',
//         type: 'Feature Request',
//       },
//     ],
//   },
// ]

let openIssue: Issue[] = reactive(

  [{
    id: 1,
    title: 'Add discount code to checkout page',
    date: 'Sep 14',
    type: 'Feature Request',
    urgency: 'low',
  },
  {
    id: 2,
    title: 'Provide documentation on integrations',
    date: 'Sep 12',
    type: 'Feature Request',
    urgency: 'low',
  },
  {
    id: 3,
    title: 'Design shopping cart dropdown',
    date: 'Sep 9',
    type: 'Design',
    urgency: 'low',
  },
  {
    id: 4,
    title: 'Add discount code to checkout page',
    date: 'Sep 14',
    type: 'Feature Request',
    urgency: 'low',
  },
  {
    id: 5,
    title: 'Test checkout flow',
    date: 'Sep 15',
    type: 'QA',
    urgency: 'low',
  },

  ],
)

watch(openIssue, (currentValue, oldValue) => {
  // watch for changes in order of list and simply overwrite the db upon list change order
  // the new state can't be persisted anyway
  // simply delete and overwrite a table?
  // can be expensive but I don;t see another way to persist the state of the data
  // mabe map over all the values and send then as update to sql, but will that change the index and order of the items?
// create project store and on update, receive new values and log then for now
  openIssue = currentValue
  console.log(openIssue)

  console.log(currentValue)
  console.log('border')

  console.log(oldValue)
})

</script>

<template>
  <HeaderUser />

  <div id="container" class="flex flex-row mx-auto justify-center">
    <div id="main" class="order-2 flex-1 h-96 bg-blue-100">
      <h1 text-2xl>
        Hi, {{ props.username }}
      </h1>
      <div id="Kaban-Board" class="flex flex-1 rounded-border flex-grow-1 flex-shrink-0 flex-row bg-yellow-300">
        <div id="Open" class="flex-1 min-w-34 max-w-52 bg-green-400 order-1 min-h-lg max-h-screen ">
          <h1 text-3xl>
            openIssue
          </h1>

          <draggable

            :list="openIssue"
            group="people"
            item-key="openIssue"
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
    </div>
    <div id="sidebar" class="min-w-24 max-w-44 bg-red-400 order-1 flex-1">
      <p>test</p>
      <ul>
        <li v-for="project in projects" :key="project" class="square-border">
          {{ project }}
        </li>
      </ul>
      <button btn>
        add project
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta: {requiresAuth: true}
</route>
