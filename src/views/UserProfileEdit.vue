<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="userprofile.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="userprofile.image"
          :src="userprofile.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
    isAdmin: true,
    image: "https://i.imgur.com/58ImzMM.png",
    createdAt: "2019-07-30T16:24:54.983Z",
    updatedAt: "2019-08-01T10:33:51.095Z"
  }
};
export default {
  data() {
    return {
      userprofile: {
        name: "",
        image: ""
      }
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchProfile(id);
  },
  methods: {
    fetchProfile(userId) {
      console.log("fetchProfile id:", userId);
      const { profile } = dummyData;
      this.userprofile = {
        ...this.userprofile,
        id: profile.id,
        image: profile.image
      };
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (!files.length) return; // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0]);
      this.userprofile.image = imageURL;
    },
    handleSubmit(e) {
      const form = e.target; // <form></form>
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>>