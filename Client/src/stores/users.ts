// @ts-check
import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type { RegisterUserInterface } from '~/types/interfaces'
import eventService from '~/composables/eventService'

interface State {
  registrationFormIsVisible: boolean
  userRegistrationData: RegisterUserInterface | null

  token: string | null
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): State => ({
    registrationFormIsVisible: true,
    userRegistrationData: null,
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
      if (this.userRegistrationData) {
        console.log(this.userRegistrationData)

        await eventService.registerUser(this.userRegistrationData)
          .then(() => {
            this.userRegistrationData = null
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
  getters: {
    getLoginData: (state: State) => state.userRegistrationData,
    getToken: (state: State) => state.token,
    getRegistrationFormIsVisible: (state: State) => state.registrationFormIsVisible,
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
