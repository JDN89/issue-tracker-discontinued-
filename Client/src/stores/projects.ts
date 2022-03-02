// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
// import axios from 'axios'
import type { Issue } from '~/types/interfaces'
// import eventService from '~/composables/eventService'

interface State {
  OpenIssues: Issue [] | null

}

export const useUserStore = defineStore({
  id: 'Projects',
  state: (): State => ({
    OpenIssues: [{
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

  }),

  actions: {

    /*
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    }, */

  },

  getters: {
    getOpenIssues: (state: State) => state.OpenIssues,

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
