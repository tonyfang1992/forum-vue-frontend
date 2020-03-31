<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard :profile="profile" />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :profile="profile" />
            <UserFollowersCard :profile="profile" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :profile="profile" />
            <UserFavoritedRestaurantCard :profile="profile" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantCard from "./../components/UserFavoritedRestaurantCard";
import UserAPI from "../apis/user";
import { Toast } from "../utils/helpers";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};
export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantCard
  },
  data() {
    return {
      profile: {},
      currentUser: dummyUser.currentUser
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await UserAPI.get({ userId });
        console.log(data);
        console.log(statusText);
        this.profile = data.profile;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法取得個人資料，請稍後再試"
        });
      }
    }
  }
};
</script>>