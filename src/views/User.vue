<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard
          :profile="profile"
          :initial-profile="profile"
          :isFollowed="isFollowed"
          :initial-is-followed="isFollowed"
        />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :profile="profile" :initial-profile="profile" />
            <UserFollowersCard :profile="profile" :initial-profile="profile" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :profile="profile" :initial-profile="profile" />
            <UserFavoritedRestaurantCard :profile="profile" :initial-profile="profile" />
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
import { mapState } from "vuex";

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
      isFollowed: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async fetchUser(id) {
      try {
        const { data, statusText } = await UserAPI.get({ id });
        const { profile, isFollowed } = data;
        this.profile = profile;
        this.isFollowed = isFollowed;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
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