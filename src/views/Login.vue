<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Vue Social</h1>
        <p>Welcome to the Vue Social App powered by Vue.js and Firebase.</p>
      </div>
      <div class="col2">
        <form @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email_address">Email</label>
            <input type="text" placeholder="you@email.com" id="email_address" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" placeholder="******" id="password" />
          </div>
          <button class="button">Log In</button>
          <div class="extras">
            <a>Forgot Password</a>
            <a>Create an Account</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// empty
</style>
