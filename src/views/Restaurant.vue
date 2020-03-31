<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :restaurant="restaurant" :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import commentAPI from "./../apis/comments";

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        // STEP 3: 透過 restaurantsAPI 取得餐廳資訊
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        // STEP 4: 將取得的資料帶入 Vue 的 data
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked
        };

        this.restaurantComments = data.restaurant.Comments;
      } catch (error) {
        // STEP 5: 錯誤處理
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    },
    async afterDeleteComment(commentId) {
      try {
        const { data, statusText } = await commentAPI.delete(commentId);
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        Toast.fire({
          icon: "success",
          title: data.message
        });
        // 以 filter 保留未被選擇的 comment.id
        this.restaurantComments = this.restaurantComments.filter(
          comment => comment.id !== commentId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法刪除評論，請稍後再試"
        });
      }
    },
    async afterCreateComment(payload) {
      try {
        const { restaurantId, text } = payload;
        const User = {
          id: this.currentUser.id,
          name: this.currentUser.name
        };
        const { data, statusText } = await commentAPI.create({
          User,
          restaurantId,
          text
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.restaurantComments.push({
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name
          },
          text,
          createdAt: new Date()
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法新增評論，請稍後再試"
        });
      }
    }
  }
};
</script>