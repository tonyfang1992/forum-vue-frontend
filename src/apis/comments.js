import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  create({ User,
    restaurantId,
    text }) {
    return apiHelper.post('/comments', {
      User,
      restaurantId,
      text
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delete(id) {
    return apiHelper.delete(`/comments/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}