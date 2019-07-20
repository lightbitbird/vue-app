<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
    />
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
    <div v-bind:style="styles">
      <p>
        <button @click="toggleBtn2">CustomClass: On / Off</button>
        <transition enter-active-class="myEnterClass" leave-active-class="myLeaveClass">
          <div v-show="show2" v-bind:style="[why, marginStyle]">That's why I love it.</div>
        </transition>
      </p>
    </div>
    <div v-bind:style="styles">
      <p>
        <button @click="toggleBtn3">AnimateCss: On / Off</button>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
          <div v-show="show3" v-bind:style="[animated, marginStyle]">Animation.</div>
        </transition>
      </p>
    </div>
    <div v-bind:style="styles">
      <p>
        <button @click="toggleBtn4">JS Hook: On / Off</button>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
          v-on:enter-cancelled="enterCancelled"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-on:leave-cancelled="leaveCancelled"
        >
          <div v-show="show4" v-bind:style="[js, marginStyle]">JS Transition.</div>
        </transition>
      </p>
    </div>
    <div v-bind:style="styles">
      <p>
        <button @click="toggleBtn5">Keyframes: On / Off</button>
        <transition appear name="kf">
          <div v-show="show5" v-bind:style="[keyframes, marginStyle]">Animation KeyFrame.</div>
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
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      styles: {
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center"
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
      why: {
        backgroundColor: "#87ceeb",
        textAlign: "center",
        width: "100%",
        height: "40px"
      },
      animated: {
        backgroundColor: "#eee8aa",
        textAlign: "center",
        width: "100%",
        height: "40px"
      },
      js: {
        backgroundColor: "#d8bfd8",
        textAlign: "center",
        width: "100%",
        height: "40px"
      },
      keyframes: {
        backgroundColor: "#778899",
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
    },
    toggleBtn2: function() {
      this.show2 = !this.show2;
    },
    toggleBtn3: function() {
      this.show3 = !this.show3;
    },
    toggleBtn4: function() {
      this.show4 = !this.show4;
    },
    toggleBtn5: function() {
      this.show5 = !this.show5;
    },
    beforeEnter: function() {
      console.log("before-enter");
    },
    enter: function() {
      console.log("enter");
    },
    afterEnter: function() {
      console.log("after-enter");
    },
    enterCancelled: function() {
      console.log("enter-cancelled");
    },
    beforeLeave: function() {
      console.log("before-leave");
    },
    leave: function() {
      console.log("leave");
    },
    afterLeave: function() {
      console.log("after-leave");
    },
    leaveCancelled: function() {
      console.log("leave-cancelled");
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

.myEnterClass,
.myLeaveClass {
  transition: 2s ease-out;
}

.kf-enter-active {
  animation: bounce 10s;
}

.kf-leave-active {
  animation: bounce 10s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
