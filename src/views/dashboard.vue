<template>
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
  </div>
</template>

<script>
const dummtData = {
  restaurant: {
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
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z"
    },
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
          updatedAt: "2020-03-02T16:01:50.000Z"
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
          updatedAt: "2020-03-02T16:02:20.000Z"
        }
      }
    ]
  }
};

export default {
  data() {
    return {
      restaurant: []
    };
  },
  created() {
    this.fetchdashboard();
  },
  methods: {
    fetchdashboard() {
      this.restaurant = dummtData.restaurant;
    }
  }
};
</script>>