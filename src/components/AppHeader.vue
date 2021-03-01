<template>
  <nav
    class="wi-full bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 py-2"
  >
    <!-- Looping from the list -->
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <!-- Here we are making a custom event by using $emit,
    since we made the custom event inside AppHeader, only AppHeader can use it.
    <AppHeader @open-login-modal="isLoginOpen = false" /> in the App.vue -->
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props: { isLoggedIn: Boolean },
  data() {
    return {
      list: [
        { title: "Calendar", to: "/calendar" },
        { title: "Sliders", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
      ],
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      //.then((res) => {})
      //.catch((e) => {});
    },
  },
};
</script>

<style>
</style>