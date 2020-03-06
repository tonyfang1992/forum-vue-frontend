<template>
  <div class="card">
    <div class="card-header">
      <strong>{{profile.Followers.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="Follower in profile.Followers"
        :key="Follower.id"
        :to="{name:'user', params:{id:Follower.id}}"
      >
        <img :src="Follower.image" width="60" height="60" class="avatar mr-1" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      require: true
    }
  }
};
</script>