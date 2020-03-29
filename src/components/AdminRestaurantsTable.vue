<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">{{ restaurant.id }}</th>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.Category && restaurant.Category.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{name:'admin-restaurant-edit',params:{id:restaurant.id}}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import restaurantAdminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchRestaurantsAdmin();
  },
  methods: {
    async fetchRestaurantsAdmin() {
      try {
        const {
          data,
          statusText
        } = await restaurantAdminAPI.restaurants.getRestaurants();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法取得後台餐廳資訊，請稍後再試"
        });
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const {
          data,
          statusText
        } = await restaurantAdminAPI.restaurants.deleteRestaurant({
          restaurantId
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.restaurants = this.restaurants.filter(
          restaurant => restaurant.id !== restaurantId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳從喜歡移除，請稍後再試"
        });
      }
    }
  }
};
</script>