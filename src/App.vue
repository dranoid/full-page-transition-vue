<template>
  <nav>
    <router-link @click="triggerLeaveTransition" to="/">Home</router-link>
    <router-link @click="triggerLeaveTransition" to="/about">About</router-link>
  </nav>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <PageLeave v-if="showW"></PageLeave>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";
import PageLeave from "./components/PageLeave.vue";
export default {
  components: {
    PageLeave,
  },
  setup() {
    const showW = ref(false);

    function triggerLeaveTransition() {
      console.log(showW.value, "update before");
      showW.value = !showW.value;
      // showW.value = true;
      console.log(showW.value, "update");
    }
    onUpdated(() => {
      // showW.value = false;
      console.log(" IYA YINNN!!", showW.value);
      // While showW.value would change to false, for some reason after this, the transition doesnt play anymore when triggerLeaveTransition() changes it to true
    });

    return { showW, triggerLeaveTransition };
  },

  // The showW variable is to trigger the leave animation but since it can be toggled by both links and resetting it to false on every change (onUpdated) is not working, the behaviour is now the transition on triggers on every odd click
};
</script>

<style>
/* I'm wondering if the opacity transition set for the router affects the entire setup  */

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
</style>
