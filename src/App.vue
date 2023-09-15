<template>
  <button @click="showW = !showW">Toggle</button>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link @click="showW = !showW" to="/about">About</router-link>
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
import { ref } from "vue";
import PageLeave from "./components/PageLeave.vue";
export default {
  components: {
    PageLeave,
  },
  setup() {
    const showW = ref(false);

    return { showW };
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
  transition: all 0.8s ease;
}
</style>
