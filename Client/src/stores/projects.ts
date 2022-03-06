// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
// import axios from 'axios'
import type { Issue, Project } from '~/types/interfaces'
// import eventService from '~/composables/eventService'

interface State {
  OpenIssues: Issue [] | null
  InProgress: Issue [] | null
  Review: Issue [] | null
  Closed: Issue[] | null
  Projects: Project []| null

}

export const useProjectStore = defineStore({
  id: 'Projects',
  state: (): State => ({
    Projects: [
      {
        id: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
        userId: 'uuid',
        title: 'Project 1',

      },
      {
        id: uuidv4(),
        userId: 'uuid',
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
      title: 'Provide documentation on integrations',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 12',
      type: 'Backend',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'shopping cart dropdown',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 9',
      type: 'QA',
      urgency: 'medium',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'test title of issue',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'Test flex grow kabanboard',
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
    Review: [{
      id: uuidv4(),
      title: 'Provide Documentation on state',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',
      date: 'Sep 14',
      type: 'Design',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Design dropdown menu for shoppingCart',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 12',
      type: 'Backend',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Display items in 4 grid columns',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 9',
      type: 'QA',
      urgency: 'medium',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'Add total sum to checkout page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'review checkout flow',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 15',
      type: 'QA',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },

    ],

    Closed: [{
      id: uuidv4(),
      title: 'Create login page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',
      date: 'Sep 14',
      type: 'Design',
      urgency: 'medium',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'create register page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Crete KabanBoard',
      type: 'Backend',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',

    },
    {
      id: uuidv4(),
      title: 'Implement vue draggable',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 9',
      type: 'QA',
      urgency: 'low',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'Add total sum to checkout page',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 14',
      type: 'Feature Request',
      urgency: 'medium',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
    },
    {
      id: uuidv4(),
      title: 'review LoginUserInterface flow',
      description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nibh at urna fringilla posuere. Maecenas aliquam mollis faucibus. Nulla tempor diam massa, eget convallis arcu fringilla tempor. Nullam interdum, magna et cursus sodales, ex tellus sodales justo, ac rhoncus lacus libero vel ligula. Sed molestie a magna gravida blandit. ',

      date: 'Sep 15',
      type: 'QA',
      urgency: 'high',
      projectId: 'f18ebf07-3888-4cc6-b7b2-5de749ec5472',
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

    // =========================================
    // ===========   FETCH Projects  ===============
    // =========================================
    async fetchProjects() {
      await console.log('fetch project: where userId = id')
    },

    // =========================================
    // ===========   FETCH OPENISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchOpenIssues(userId: string, projectId: string) {
      await console.log('fetch open issues where id = project id || project.id[o] on mounted')
      return { userId, projectId }
    },

    // =========================================
    // ===========   FETCH ISSUES IN PROGRESS  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchIssuesInProgress() {
      await console.log('fetch issues in progress')
    },

    // =========================================
    // ===========   FETCH ISSUES TO BE TESTED   ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchIssuesToBeReviewed() {
      await console.log('fetch issues to be reviewed')
    },

    // =========================================
    // ===========   FETCH CLOSED ISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchClosedIssues() {
      await console.log('fetch closed issues')
    },

    // =========================================
    // ===========   UPDATE OPEN ISSUES  ===============
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
    // ===========   UPDATE ISSUES INPROGRESS  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async updateIssueInProgressDb(value: Issue[]) {
      console.log(value)
    },

    // =========================================
    // ===========   UPDATE TO BE TESTED  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async updateIssuesToBeTested(value: Issue[]) {
      console.log(value)
    },
    // =========================================
    // ===========   UPDATE CLOSED ISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async updateClosedIssues(value: Issue[]) {
      console.log(value)
    },

  },

  getters: {
    getOpenIssues: (state: State) => state.OpenIssues,
    getIssuesInProgress: (state: State) => state.InProgress,
    getReview: (state: State) => state.Review,
    getClosed: (state: State) => state.Closed,
    getProjects: (state: State) => state.Projects,

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
