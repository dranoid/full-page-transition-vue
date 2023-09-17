<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti optio
      vel eaque aspernatur sint laborum.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
      reprehenderit eveniet laudantium placeat id magni.
    </p>
    <PageCover></PageCover>
  </div>
</template>

<script>
import PageCover from "../components/PageCover.vue";
import { ref } from "vue";
export default {
  components: {
    PageCover,
  },
  setup() {
    const showSlides = ref(false);

    return { showSlides };
  },
};
</script>

<style></style>
