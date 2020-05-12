// 暂不用vuex
import axios from 'axios'
import { APP_URL } from '../constant'

// export async function getHome () {
//   return axios.get(`${APP_URL.api}/homepage`)
// }

export async function getList() {
  return axios.get('/api/list')
}
