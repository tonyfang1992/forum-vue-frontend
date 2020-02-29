<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
      isAdmin: true,
      image: "http://via.placeholder.com/300x300?text=No+Image",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: "2020-02-29T08:11:44.000Z",
            updatedAt: "2020-02-29T08:11:44.000Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
      isAdmin: false,
      image: "http://via.placeholder.com/300x300?text=No+Image",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2020-02-29T08:46:56.000Z",
            updatedAt: "2020-02-29T08:46:56.000Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
      isAdmin: false,
      image: "http://via.placeholder.com/300x300?text=No+Image",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
};

export default {
  components: {
    NavTabs,
    UserCard
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.users = dummyData.users;
    }
  }
};
</script>