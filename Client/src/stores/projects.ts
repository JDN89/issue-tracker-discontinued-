// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
// import axios from 'axios'
import type { Issue, Project } from '~/types/interfaces'
// import eventService from '~/composables/eventService'

import { useUserStore } from '~/stores/users'
import eventService from '~/composables/eventService'

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
    Projects: null,
    OpenIssues: null,

    InProgress: null,

    Review: null,

    Closed: null,
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
      const userStore = useUserStore()

      if (userStore.getToken) {
        await eventService.getAllProjects(userStore.getToken)
          .then((response) => {
            this.Projects = response.data
          }).catch((error) => {
            if (axios.isAxiosError(error)) {
              if (error.response) {
                console.log(error.response?.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              }
              else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request)
              }
              else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
              }
            }
          })
      }
    },

    // =========================================
    // ===========   FETCH OPENISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchOpenIssues(projectId: string) {
      const userStore = useUserStore()

      if (userStore.getToken) {
        await eventService.getAllOpenIssues(userStore.getToken, projectId)
          .then((response) => {
            this.OpenIssues = response.data
          }).catch((error) => {
            if (axios.isAxiosError(error)) {
              if (error.response) {
                console.log(error.response?.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              }
              else if (error.request) {
                console.log(error.request)
              }
              else {
                console.log('Error', error.message)
              }
            }
          })
      }
    },

    // =========================================
    // ===========   FETCH ISSUES IN PROGRESS  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchIssuesInProgress(projectId: string) {
      const userStore = useUserStore()

      if (userStore.getToken) {
        await eventService.getAllIssuesInProgress(userStore.getToken, projectId)
          .then((response) => {
            this.InProgress = response.data
          }).catch((error) => {
            if (axios.isAxiosError(error)) {
              if (error.response) {
                console.log(error.response?.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              }
              else if (error.request) {
                console.log(error.request)
              }
              else {
                console.log('Error', error.message)
              }
            }
          })
      }
    },

    // =========================================
    // ===========   FETCH ISSUES TO BE TESTED   ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchAllReviewIssues(projectId: string) {
      const userStore = useUserStore()
      if (userStore.getToken) {
        await eventService.getAllReviewIssues(userStore.getToken, projectId)
          .then((response) => {
            this.Review = response.data
          }).catch((error) => {
            if (axios.isAxiosError(error)) {
              if (error.response) {
                console.log(error.response?.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              }
              else if (error.request) {
                console.log(error.request)
              }
              else {
                console.log('Error', error.message)
              }
            }
          })
      }
    },

    // =========================================
    // ===========   FETCH CLOSED ISSUES  ===============
    // only udpate don,t refresh list, state persists in Pinia while on page and gets loaded from db upon mount
    // =========================================

    async fetchClosedIssues(projectId: string) {
      const userStore = useUserStore()
      if (userStore.getToken) {
        await eventService.getAllClosedIssues(userStore.getToken, projectId)
          .then((response) => {
            this.Closed = response.data
          }).catch((error) => {
            if (axios.isAxiosError(error)) {
              if (error.response) {
                console.log(error.response?.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              }
              else if (error.request) {
                console.log(error.request)
              }
              else {
                console.log('Error', error.message)
              }
            }
          })
      }
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
