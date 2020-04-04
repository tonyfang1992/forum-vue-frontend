<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.Followings?profile.Followings.length:'No Data'}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="Following in profile.Followings"
        :key="Following.id"
        :to="{name:'user', params:{id:Following.id}}"
      >
        <img :src="Following.image | emptyImage" width="60" height="60" class="avatar mr-1" />
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