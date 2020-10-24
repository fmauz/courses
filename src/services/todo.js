import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://5f93fbd09ecf720016bfc1e2.mockapi.io/api/v1/'
})

export const list = async () => {
  return instance.get('/todo').then(res => res.data)
}

export const detail = async id => {
  return instance.get('/todo/' + id).then(res => res.data)
}

export const create = async data => {
  return instance.post('/todo', data).then(res => res.data)
}

export const update = async (id, { description, finishedAt }) => {
  return instance.put('/todo/' + id, { description, finishedAt }).then(res => res.data)
}