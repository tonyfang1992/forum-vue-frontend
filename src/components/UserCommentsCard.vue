<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.Comments?profile.Comments.length:'No Data'}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment in profile.Comments"
        :key="comment.id"
        :to="{name:'restaurant', params:{id: comment.Restaurant.id}}"
      >
        <img
          :src="comment.Restaurant.image | emptyImage"
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