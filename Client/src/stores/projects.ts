// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
// import axios from 'axios'
import type { Issue } from '~/types/interfaces'
// import eventService from '~/composables/eventService'

interface State {
  OpenIssues: Issue [] | null

}

export const useProjectStore = defineStore({
  id: 'Projects',
  state: (): State => ({
    OpenIssues: [{
      id: uuidv4(),
      title: 'Add discount code to checkout page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',
      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'low',

    },
    {
      id: uuidv4(),
      title: 'Provide documentation on integrations',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 12',
      type: 'Feature Request',
      urgency: 'low',
    },
    {
      id: uuidv4(),
      title: 'Design shopping cart dropdown',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 9',
      type: 'Design',
      urgency: 'low',
    },
    {
      id: uuidv4(),
      title: 'Add discount code to checkout page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'low',
    },
    {
      id: uuidv4(),
      title: 'Test checkout flow',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 15',
      type: 'QA',
      urgency: 'low',
    },

    ],

  }),

  actions: {
    // TOODO: delete once db is connected
    generateGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    },

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
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
