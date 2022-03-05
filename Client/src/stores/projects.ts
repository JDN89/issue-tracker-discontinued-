// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
// import axios from 'axios'
import type { Issue, Project } from '~/types/interfaces'
// import eventService from '~/composables/eventService'

interface State {
  OpenIssues: Issue [] | null
  InProgress: Issue [] | null
  Test: Issue [] | null
  Done: Issue[] | null
  Projects: Project []| null

}

export const useProjectStore = defineStore({
  id: 'Projects',
  state: (): State => ({
    Projects: [
      {
        id: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
        title: 'Project 1',

      },
      {
        id: uuidv4(),
        title: 'Project 2',
      }],

    OpenIssues: [{
      id: uuidv4(),
      title: 'Add discount code to checkout page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',
      date: 'Sep 14',
      type: 'Design',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Provide documentation on integrations',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 12',
      type: 'Backend',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Design shopping cart dropdown',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 9',
      type: 'QA',
      urgency: 'medium',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'Add discount code to checkout page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'Test checkout flow',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 15',
      type: 'QA',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },

    ],
    InProgress: [{
      id: uuidv4(),
      title: 'create a cart button',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',
      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Provide documentation on functionality',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 12',
      type: 'Feature Request',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Design shopping cart',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 9',
      type: 'Design',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },

    ],
    Test: null,
    Done: null,

  }),

  actions: {
    // TOODO: delete once db is connected
    generateGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    },

    // =========================================
    // ===========   GET OPENISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    // get openiusses from db
    // openIssues == db value
    // on mounted store.getOpenIsusues

    // =========================================
    // ===========   UPDATE OPENISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    // seeing that the state is being saved in the pinia store during sessions
    // we only need to send an update of the db design when the session ends -> beforeUnmount
    // what if users loses iternet connection? demo app -> no need to think of this scenario
    // in serious app -> send the new state with each drag event to the db or cache it and then send it in chuncks
    async updateOpenIssuesDb(value: Issue[]) {
      console.log(value)
      // when you delete all items in one column, if value == null
      // -> delete issues with project id == x and don't replace
    },

    // =========================================
    // ===========   UPDATE ISSUESINPROGRESS  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async updateIssueInProgressDb(value: Issue[]) {
      // find id from dragged issue
      // find out which one is dragged and where it has been dropped!!
      // delete all the issues where project id - ID
      // send project ID with the request
      // insert the issues in the correct db with the new order
      // simpler? delete form db dragged issue
      // insert in db dragged issue

      console.log(value)
    },

  },

  getters: {
    getOpenIssues: (state: State) => state.OpenIssues,
    getIssuesInProgress: (state: State) => state.InProgress,
    getProjects: (state: State) => state.Projects,

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
