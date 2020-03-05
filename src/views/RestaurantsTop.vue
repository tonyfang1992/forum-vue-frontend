<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id }}">
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{restaurant.name}}</h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">{{restaurant.description}}</p>
            <router-link :to="{ name: 'restaurant', params: { id: restaurant.id }}">
              <button class="btn btn-primary mr-2">Show</button>
            </router-link>
            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite"
            >移除最愛</button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite"
            >加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
const dummyData = {
  restaurants: [
    {
      id: 1052,
      name: "test",
      tel: "00000",
      address: "ad",
      opening_hours: "11:59",
      description: "123",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.159643827730235",
      viewCounts: 2472,
      createdAt: "2020-03-02T14:36:07.000Z",
      updatedAt: "2020-03-04T11:44:41.000Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 1052,
            createdAt: "2020-03-02T16:47:46.000Z",
            updatedAt: "2020-03-02T16:47:46.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 48,
      name: "Fernando Beahan",
      tel: "782-526-8659 x452",
      address: "447 Isaiah Garden",
      opening_hours: "08:00",
      description: "officia corrupti nisi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.159643827730235",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 48,
            createdAt: "2020-03-02T16:47:22.000Z",
            updatedAt: "2020-03-02T16:47:22.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 47,
      name: "Flo Paucek",
      tel: "616-595-6381",
      address: "0570 Toy Land",
      opening_hours: "08:00",
      description: "Explicabo voluptate quam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.110473595831435",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 47,
            createdAt: "2020-03-04T04:46:22.000Z",
            updatedAt: "2020-03-04T04:46:22.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 46,
      name: "Mr. Price Heathcote",
      tel: "1-234-170-6861",
      address: "178 Collins Mission",
      opening_hours: "08:00",
      description: "Unde maiores error ex.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.75335489939356",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 46,
            createdAt: "2020-03-04T04:48:26.000Z",
            updatedAt: "2020-03-04T04:48:26.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 45,
      name: "Anjali Kassulke",
      tel: "313-500-9523 x7668",
      address: "356 Reanna Fall",
      opening_hours: "08:00",
      description: "dolore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.65242985288428",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 45,
            createdAt: "2020-03-02T16:47:53.000Z",
            updatedAt: "2020-03-02T16:47:53.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 44,
      name: "Madge Moen",
      tel: "794.584.3958 x1725",
      address: "6233 Annamae Mission",
      opening_hours: "08:00",
      description: "sed ut illum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.163077027772346",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 44,
            createdAt: "2020-03-04T04:48:45.000Z",
            updatedAt: "2020-03-04T04:48:45.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 43,
      name: "Mrs. Noemy Watsica",
      tel: "(252) 981-9430 x3227",
      address: "1218 Dariana Ports",
      opening_hours: "08:00",
      description: "Animi rerum suscipit iusto id autem et. Facilis id",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.889387774329695",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 43,
            createdAt: "2020-03-04T04:50:12.000Z",
            updatedAt: "2020-03-04T04:50:12.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 42,
      name: "Adrian Weimann",
      tel: "(102) 131-9224 x2147",
      address: "04294 Nils Track",
      opening_hours: "08:00",
      description: "Et dolores eos sed aut doloribus velit autem quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.71296646754862",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 42,
            createdAt: "2020-03-04T05:03:04.000Z",
            updatedAt: "2020-03-04T05:03:04.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 1,
      name: "Dr. Izaiah Ernser",
      tel: "389.061.3241 x162",
      address: "7226 Johns Islands",
      opening_hours: "08:00",
      description: "quam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.45122643685453",
      viewCounts: 29437,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-04T17:05:13.000Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: "2020-03-04T08:27:19.000Z",
            updatedAt: "2020-03-04T08:27:19.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 41,
      name: "Bulah Cummerata",
      tel: "1-272-941-4227 x5104",
      address: "468 Lemke Isle",
      opening_hours: "08:00",
      description: "Autem dolorem qui dignissimos corporis alias neque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.15667863642383",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
};

export default {
  components: {
    NavTabs
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: true
      };
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: false
      };
    }
  }
};
</script>