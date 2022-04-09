import http from '../utils/http';

export const state = () => ({
  user: {
    id: -1,
    name: '',
    email: ''
  }
})

export const mutations = {
  get(state) {
    http.get('/users').then((response) => {})
  }
}
