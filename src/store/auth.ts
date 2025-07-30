import { defineStore } from "pinia"
import { users as allUsers } from './../store/data'
import type { User } from './types'

export const useAuthSetupStore = defineStore('auth', {
  state: (): {
    users: User[],
    token: string,
    username: string,
    avatar: string,
    login: string,
    password: string
  } => ({
    users: allUsers,
    token: '',
    username: '',
    avatar: '',
    login: '',
    password: ''
  }),
  getters: {
  },
  actions: {
    signIn() {
      const hasUser = this.users.find(user => user.username === this.login.trim() && user.password === this.password.trim())
  
      if (!hasUser) {
        alert(`Пользователь ${this.login} не найден`)
        return false
      }
  
      this.token = hasUser.token
      this.username = hasUser.username
      this.avatar = hasUser.avatar
      this.login = ''
      this.password = ''
      return true
    },
    logOut() {
        this.token = ''
        this.username = ''
        this.avatar = ''
        localStorage.clear()
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
        paths: ['token']
      }
    ]
  }
})