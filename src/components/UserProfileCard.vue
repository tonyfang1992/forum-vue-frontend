<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{profile.name}}</h5>
          <p class="card-text">{{profile.email}}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{profile.Comments?profile.Comments.length:'No Data'}}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{profile.FavoritedRestaurants?profile.FavoritedRestaurants.length:'No Data'}}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{profile.Followers?profile.Followers.length:'No Data'}}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{profile.Followings?profile.Followings.length:'No Data'}}</strong> followers (追隨者)
            </li>
          </ul>
          <div v-if="currentUser.id===profile.id" class="div">
            <p>
              <router-link
                v-if="currentUser.id===profile.id"
                :to="{name:'users-edit',params:{id:profile.id}}"
              >
                <button type="submit" class="btn btn-primary">edit</button>
              </router-link>
            </p>
          </div>
          <div v-else class="div">
            <p>
              <button
                v-if="isFollowed"
                type="button"
                class="btn btn-danger"
                @click.stop.prevent="deleteFollowing(profile.id)"
              >取消追蹤</button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFollowing(profile.id)"
              >追蹤</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "../apis/user";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      require: true
    },
    initialIsFollowed: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  watch: {
    initialProfile(profile) {
      this.profile = {
        ...this.profile,
        ...profile
      };
    },
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({ userId });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無發追蹤該使用者，請稍後再試"
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({ userId });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法解除追蹤，請稍後再試"
        });
      }
    }
  }
};
</script>