<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Dr. Izaiah Ernser",
    tel: "389.061.3241 x162",
    address: "7226 Johns Islands",
    opening_hours: "08:00",
    description: "quam",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=90.45122643685453",
    viewCounts: 39,
    createdAt: "2020-02-28T14:38:32.000Z",
    updatedAt: "2020-03-01T11:02:24.456Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z"
    },
    FavoritedUsers: [],
    LikedUsers: [
      {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
        isAdmin: true,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Like: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2020-02-29T16:54:53.000Z",
          updatedAt: "2020-02-29T16:54:53.000Z"
        }
      }
    ],
    Comments: [
      {
        id: 1,
        text:
          "Dolores dolorem maxime debitis blanditiis quam sed voluptatem mollitia.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z"
        }
      },
      {
        id: 51,
        text: "Nobis aspernatur nobis cumque sed nemo et autem.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z"
        }
      },
      {
        id: 3222,
        text: "test",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-03-01T10:54:40.000Z",
        updatedAt: "2020-03-01T10:54:40.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z"
        }
      }
    ]
  },
  isFavorited: false,
  isLiked: true
};

export default {
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
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    }
  }
};
</script>