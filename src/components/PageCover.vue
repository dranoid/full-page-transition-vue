<template>
  <TransitionGroup
    appear
    name="cover"
    tag="div"
    @before-enter="beforeEnterNoLeave"
    @enter="enterNoLeave"
    @after-enter="afterEnterNoLeave"
  >
    <div
      v-for="(box, index) in boxes"
      :class="[`box${box}`, 'pg-box', 'no-leave']"
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
  // pageCover is the second half of the transition, whenever a page is reloaded it plays. The plan was that the first half of the transition ends on a red box and the second half starts from a red box giving it a 'seamless' feel but because of time syncing issues the first half is still a bit choppy

  setup(props) {
    const boxes = ref([1, 2, 3, 4, 5]);

    const beforeEnterNoLeave = (el) => {
      // Makes the transition start from covering the whole page
      el.style.transform = "translateY(0);";
      gsap.set(el, {
        yPercent: 0,
      });
    };
    const enterNoLeave = (el, done) => {
      // The staggered boxes transition
      gsap.to("div>.pg-box.no-leave", {
        duration: 1,
        onComplete: done,
        yPercent: -230,
        ease: "power4.in",
        stagger: 0.1,
      });
    };
    const afterEnterNoLeave = (el) => {
      // Remove the element from the DOM after the leave transition
      el.remove();
    };

    return {
      boxes,
      enterNoLeave,
      beforeEnterNoLeave,
      afterEnterNoLeave,
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
  transform: translateY(0);
}

.box1 {
  background-color: red;
  color: white;
  z-index: 20;
}

.box2 {
  background-color: green;
  color: white;
  z-index: 19;
}

.box3 {
  background-color: pink;
  color: white;
  z-index: 18;
}

.box4 {
  background-color: yellow;
  color: white;
  z-index: 17;
}
.box5 {
  background-color: red;
  color: white;
  z-index: 16;
}
</style>
