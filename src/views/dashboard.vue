<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{restaurant.name}}</h1>
        <p>[{{restaurant.Category.name}}]</p>
      </div>
      <hr />
      <div class="col-md-4">
        <br />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>評論數: {{restaurant.Comments.length}}</strong>
            </li>
            <li>
              <strong>瀏覽次數: {{restaurant.viewCounts}}</strong>
            </li>
            <li>
              <strong>收藏數:</strong>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8"></div>
      <a href="#" @click="$router.back()">回上一頁</a>
    </div>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      restaurant: []
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchdashboard(id);
  },
  methods: {
    async fetchdashboard(restaurantId) {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });
        console.log(data);
        console.log(statusText);
        this.restaurant = data.restaurant;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法取得詳細資料，請稍後再試"
        });
      }
    }
  }
};
</script>>