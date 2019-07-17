<template>
  <div id="app">
    <div v-bind:style="styles">
      <p>
        <button @click="toggleBtn">On / Off</button>
        <transition appear>
          <div v-show="show" v-bind:style="[fade, marginStyle]">Tody is fine.</div>
        </transition>
        <transition name="rain">
          <div v-show="show" v-bind:style="[rainy, marginStyle]">Tody is rainy.</div>
        </transition>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      styles: {
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "inline-block"
      },
      fade: {
        backgroundColor: "#66CCCC",
        textAlign: "center",
        width: "100%",
        height: "40px"
      },
      rainy: {
        backgroundColor: "#bdb76b",
        textAlign: "center",
        width: "100%",
        height: "40px"
      },
      marginStyle: {
        margin: "15px 0 10px"
      }
    };
  },
  methods: {
    toggleBtn: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.rain-enter-active,
.rain-leave-active {
  transition: opacity 1s;
}

.rain-enter,
.rain-leave-to {
  opacity: 0;
}
</style>
