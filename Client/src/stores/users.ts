// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type { CreateUserInterface } from '~/types/interfaces'
import eventService from '~/composables/eventService'

interface State {
  registrationFormIsVisible: boolean
  userData: CreateUserInterface | null

  token: string | null
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): State => ({
    registrationFormIsVisible: true,
    userData: null,
    token: null,
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

    async registerUser() {
      if (this.userData) {
        await eventService.registerUser(this.userData)
          .then(() => {
            this.userData = null
            this.registrationFormIsVisible = false
          })
          .catch((error) => {
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

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
