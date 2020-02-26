<template>
  <form @submit.prevent="login">
    <div class="form-group row">
      <label for="email" class="col-md-4 col-form-label text-md-right">邮箱</label>

      <div class="col-md-6">
        <input v-model="email" id="email" type="email" class="form-control" name="email" required />
      </div>
    </div>

    <div class="form-group row">
      <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

      <div class="col-md-6">
        <input
          v-model="password"
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
        />
      </div>
    </div>

    <div class="form-group row mb-0">
      <div class="col-md-6 offset-md-4">
        <button type="submit" class="btn btn-primary">登录</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      let formData = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("loginRequest", formData)
        .then(response => {
          this.$router.push({ name: "profile" });
        })
        .catch(error => {
          if (error.response.status === 421) {
            this.bag.add({
              field: "password",
              msg: "邮箱密码不相符"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
</style>