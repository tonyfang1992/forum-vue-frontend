<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <router-link to="/admin/restaurants/new" class="btn btn-primary mb-4">New Restaurant</router-link>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <AdminRestaurantsTable :restaurants="restaurants" />
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
import AdminRestaurantsTable from "./../components/AdminRestaurantsTable";
import restaurantAdminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
export default {
  components: {
    AdminNav,
    AdminRestaurantsTable
  },
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
        const { data, statusText } = await restaurantAdminAPI.getRestaurants();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        console.log(data);
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法取得後台餐廳資訊，請稍後再試"
        });
      }
    }
  }
};
</script>