<template>
  <div class="flex flex-wrap w-full">
    <!-- we are binding two classes -->
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 350px"
        ></div
      ></transition>
    </div>
    <!-- Dots div composition -->
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //function that returns the current slide which is indicated by the number.
  //depending on the indexes you have given each of slide, it will go in that order.
  //color teal does not display???
  data() {
    return {
      currentSlide: 1,
      sliders: ["bg-purple-600", "bg-blue-600", "bg-yellow-600", "bg-red-600"],
      interval: "",
    };
  },

  //mounted hook that computes at what interval should the slides chage.
  //if statement for making sure we dont go out of slide 3 aka no slide.
  //slight modification to 'this.currentSlide = 0;' it should be 1 because the zero slide is the white space behind all of them.

  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },

  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 3 ? 0 : this.currentSlide + 1;

      /* if (this.currentSlide === 3) {
        this.currentSlide = 1;
      } else {
        this.currentSlide++;
      } */
    }, 2000);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
