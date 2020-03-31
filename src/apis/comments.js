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
}