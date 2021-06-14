import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "../firebase";
import router from "../router/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
  },
  //mutations are used to commit + track state changes (best practice: actions call mutations which update state directly)
  mutations: {
    setUserProfile(state, value) {
      state.userProfile = value;
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
    async fetchUserProfile({ commit }, user) {
      //fetch user profile
      const userProfile = await firebase.usersCollection.doc(user.uid).get();
      //set user profile in state
      commit("setUserProfile", userProfile.data());
      //change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    },
    async logout({ commit }) {
      await firebase.auth.signOut();

      //clear the userProfile and redirect to /login
      commit("setUserProfile", {});
      router.push("/login");
    },
    async createPost({ state }, post) {
      await firebase.postsCollection.add({
        createdOn: new Date(),
        content: post.content,
        userId: firebase.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0,
      });
    },
  },
});

export default store;
