<template>
  <div id="app">
    <SiteNavigation v-if="showNav"></SiteNavigation>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SiteNavigation from "@/components/SiteNavigation";

export default {
  components: {
    SiteNavigation,
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      console.log(Object.keys(this));
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>
