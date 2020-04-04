<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.Followers?profile.Followers.length: 'No Data'}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="Follower in profile.Followers"
        :key="Follower.id"
        :to="{name:'user', params:{id:Follower.id}}"
      >
        <img :src="Follower.image | emptyImage" width="60" height="60" class="avatar mr-1" />
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