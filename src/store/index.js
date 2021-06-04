import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "../../firebase.js";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_profile: {
      //empty
    },
  },
  //mutations are used to commit + track state changes (best practice: actions call mutations which update state directly)
  mutations: {
    setUserProfile(state, value) {
      state.user_profile = value;
    },
  },
  actions: {
    async login({ dispatch }, form) {
      //sign user in
      const { user } = await firebase.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      //fetch user profile
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      //fetch user profile
      const user_profile = await firebase.usersCollection.doc(user.id).get();
      //set user profile in state
      commit("setUserProfile", user_profile.data());
      //change route to dashboard
      router.push("/");
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await firebase.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      // create user profile object in userCollections
      await firebase.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title,
      });
      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
  },
  modules: {},
});
