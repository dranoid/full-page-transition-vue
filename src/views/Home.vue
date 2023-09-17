<template>
  <div>
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
      voluptate.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa veniam
      velit iusto iste, debitis id quasi nisi provident asperiores perferendis
      maxime, est voluptates? Pariatur, minima.
    </p>
    <PageCover></PageCover>
  </div>
</template>

<script>
import { ref, onUnmounted } from "vue";
import PageCover from "../components/PageCover.vue";
export default {
  components: {
    PageCover,
  },
  setup() {
    const showSlides = ref(false);

    // onUnmounted(() => {
    //   console.log("unmounting");
    //   showSlides.value = true;
    //   console.log(showSlides.value);
    // });

    return { showSlides };
  },
};
</script>

<style></style>
