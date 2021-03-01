<template>
  <!-- Overlapping-css + custom event for only LoginModal use -->
  <section
    @click="close"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <!-- Positioning of the loggin button -->
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z -30 m-auto bg-green-300 p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <GoogleLogin @close-login-from-google="close" />

          <form class="p-2 my-2 border" @submit.prevent="submit">
            <div>
              <label> Email or Username</label>
              <input
                ref="emailRef"
                v-model="email"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
              />
            </div>
            <div>
              <label> Password</label>
              <input
                v-model="password"
                class="rounded shadow p-2 w-full"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full rounded shadow-md bg-gradient-to-r from bg-green-400 from-blue-400 pb-2 text-white"
              >
                <span v-if="!isLoading"> Login</span>
                <span v-else>⏳</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "../components/Login/GoogleLogin";

export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.isLoading = false;
        })
        .catch(() => {
          this.password = "";
          this.isLoading = false;
          this.close();
        });
    },

    close() {
      this.$emit("close-login");
    },
  },
};
</script>

<style>
</style>