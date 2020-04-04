<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.FavoritedRestaurants?profile.FavoritedRestaurants.length:'No Data'}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoritedRestaurant in profile.FavoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{name:'restaurant',params:{id:favoritedRestaurant.id}}"
      >
        <img
          :src="favoritedRestaurant.image | emptyImage"
          width="60"
          height="60"
          class="avatar mr-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      profile: this.initialProfile
    };
  },
  watch: {
    initialProfile(profile) {
      this.profile = {
        ...this.profile,
        ...profile
      };
    }
  }
};
</script>