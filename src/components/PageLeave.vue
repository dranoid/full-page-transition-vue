<template>
  <TransitionGroup
    appear
    name="cover"
    tag="div"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <div
      v-for="(box, index) in boxes"
      :class="[`box${box}`, 'pg-box', 'leave']"
      :key="index"
      :data-index="index"
    >
      <!-- For better visualization of the transitions you can uncomment the box below -->
      <!-- {{ box }} -->
    </div>
  </TransitionGroup>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  // PageLeave is a transition triggered when the user clicks on a navigation link (currently, it triggers even if you are still on the same page). It is the first half of the transition we are trying to achieve

  setup(props) {
    const boxes = ref([1, 2, 3, 4, 5]);

    const beforeEnter = (el) => {
      // This starts the transition with the boxes below the page
      el.style.transform = "translateY(100%);";
    };
    const enter = (el, done) => {
      // A gsap timeline is created, for better sequencing.
      const tl = gsap.timeline();

      // gsap.to(el, {
      // Css selectors for the boxes on this page
      tl.to("div>.pg-box.leave", {
        duration: 0.2,
        yPercent: -100,
        stagger: 0.1,
      });

      // Allows the boxes to stay on screen for an extra 0.5 seconds before the onComplete -> afterEnter() is triggered and the element is removed
      // The duration issues is what's responsible for the chopiness at the start of the transition between pages. Notice that the beginning seems rushed while the ending is smooth
      tl.to({}, { onComplete: done, duration: 0.5 });
    };
    const afterEnter = (el) => {
      // Remove the element from the DOM after the leave transition
      el.remove();
    };

    return {
      boxes,
      enter,
      beforeEnter,
      afterEnter,
    };
  },
};
</script>

<style scoped>
.pg-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: bold;
  transform: translateY(100%);
}

.box1 {
  background-color: red;
  color: white;
  z-index: 16;
}

.box2 {
  background-color: green;
  color: white;
  z-index: 17;
}

.box3 {
  background-color: pink;
  color: white;
  z-index: 18;
}

.box4 {
  background-color: yellow;
  color: white;
  z-index: 19;
}
.box5 {
  background-color: red;
  color: white;
  z-index: 20;
}
</style>
