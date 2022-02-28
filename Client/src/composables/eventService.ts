import axios from 'axios'
import type { LoginUserInterface, RegisterUserInterface } from '../types/interfaces'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: false,
})

export default {

  // ===========  User Requests  ===============

  async registerUser(user: RegisterUserInterface) {
    return await apiClient.post('account/register', user)
  },
  async loginUser(user: LoginUserInterface) {
    return await apiClient.post('account/login', user)
  },

  // async retrieveSession(token: string) {
  //   return await apiClient.post('account/retrieveSession', token)
  // },
}
