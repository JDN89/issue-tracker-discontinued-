import axios from 'axios'
import type { CreateUserInterface } from '../types/interfaces'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: false,
})

export default {

  // ===========  User Requests  ===============

  async registerUser(user: CreateUserInterface) {
    return await apiClient.post('/register', user)
  },
  async loginUser(user: CreateUserInterface) {
    return await apiClient.post('/login', user)
  },

}
