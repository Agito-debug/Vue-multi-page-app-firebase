<template>
  <div class="m-auto text-2xl">
    <h1 class="text-center">Vue Calendar</h1>

    <section class="mx-20 flex justify-between">
      <h2 class="font-bold font-serif">{{ currentMonthName }}</h2>
      <h2 class="font-bold font-serif">{{ currentYear }}</h2>
    </section>

    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>

    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth(currentYear, currentMonth)"
        :key="num"
        :class="currenDateClass(num)"
      >
        {{ num }}
      </p>

      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
    </section>

    <section class="flex justify-between my my-4">
      <button class="p-2 border rounded border-black" @click="prev">
        Prev
      </button>
      <button class="p-2 border rounded border-black" @click="next">
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth(),

      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },

  methods: {
    daysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },

    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    //next button fuction and the increment of the years
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    //previous function plus the decrement of the years
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },

    currenDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "text-red-600" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
</style>