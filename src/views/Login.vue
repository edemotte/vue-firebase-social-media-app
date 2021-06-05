<template>
  <div id="login">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>
    <section>
      <div class="col1">
        <h1>Vue Social</h1>
        <p>Welcome to the Vue Social App powered by Vue.js and Firebase.</p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email_address">Email</label>
            <input
              v-model.trim="login_form.user_email"
              type="text"
              placeholder="you@email.com"
              id="email_address"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              v-model.trim="login_form.user_password"
              type="password"
              placeholder="******"
              id="password"
            />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Get Started</h1>
          <div>
            <label for="signup_name">Name</label>
            <input
              v-model.trim="signupForm.signup_name"
              type="text"
              placeholder="Enter your name"
              id="signup_name"
            />
          </div>
          <div>
            <label for="signup_title">Title</label>
            <input
              v-model.trim="signupForm.signup_title"
              type="text"
              placeholder="Company"
              id="signup_title"
            />
          </div>
          <div>
            <label for="signup_email">Email</label>
            <input
              v-model.trim="signupForm.signup_email"
              type="text"
              placeholder="you@email.com"
              id="signup_email"
            />
          </div>
          <div>
            <label for="signup_password">Password</label>
            <input
              v-model.trim="signupForm.signup_password"
              type="password"
              placeholder="min 6 characters"
              id="signup_password"
            />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from "@/components/PasswordReset";
export default {
  components: {
    PasswordReset,
  },
  data() {
    return {
      login_form: {
        user_email: "",
        user_password: "",
      },
      signupForm: {
        signup_name: "",
        signup_title: "",
        signup_email: "",
        signup_password: "",
      },
      showLoginForm: true,
      showPasswordReset: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.login_form.user_email,
        password: this.login_form.user_password,
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.signup_email,
        password: this.signupForm.signup_password,
        name: this.signupForm.signup_name,
        title: this.signupForm.signup_title,
      });
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
  },
};
</script>

<style lang="scss" scoped>
// empty
</style>
