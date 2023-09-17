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
    });

    return { showW, triggerLeaveTransition };
  },
};
</script>

<style>
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
