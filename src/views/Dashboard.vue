<template>
  <div id="dashboard">
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
          <div class="create-post">
            <p>create a post</p>
            <form @submit.prevent>
              <textarea v-model.trim="post.content"></textarea>
              <button
                @click="createPost()"
                :disabled="post.content === ''"
                class="button"
              >
                post
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col2">
        <div v-if="posts.length">
          <div v-for="post in posts" :key="post.id" class="post">
            <h5>{{ post.userName }}</h5>
            <span>{{ post.createdOn | formatDate }}</span>
            <p>{{ post.content | trimLength }}</p>
            <ul>
              <li>
                <a>Comments: {{ post.comments }}</a>
              </li>
              <li>
                <a>Likes: {{ post.likes }}</a>
              </li>
              <li><a>View Full Post</a></li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p class="no-results">There are currently no posts</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      post: {
        content: "",
      },
    };
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", { content: this.post.content });
      this.post.content = "";
    },
  },
  filters: {
    formatDate(value) {
      if (!value) {
        return "-";
      }
      let date = value.toDate();
      return moment(date).fromNow();
    },
    trimLength(value) {
      if (value.length < 200) {
        return value;
      }
      return `${value.substring(0, 200)}...`;
    },
  },
};
</script>
