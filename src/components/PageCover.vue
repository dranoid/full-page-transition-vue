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
      <!-- {{ box }} -->
    </div>
  </TransitionGroup>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  props: {
    leaveTransition: Boolean,
  },
  setup(props) {
    const boxes = ref([1, 2, 3, 4, 5]);

    const beforeEnterNoLeave = (el) => {
      // When the page is openned (leavetransition is undefined)
      el.style.transform = "translateY(0);";
      // If the user clicks on a nav link (leavetransition is true)
      // console.log("leave is true from from");
      // el.style.transform = "translateY(100%);";
      // el.style.transform = "translateY(0);";
      gsap.set(el, {
        yPercent: 0,
      });
    };
    const enterNoLeave = (el, done) => {
      // When the page is openned (leavetransition is undefined)
      gsap.to("div>.pg-box.no-leave", {
        duration: 1,
        onComplete: done,
        yPercent: -230,
        ease: "power4.in",
        // delay: el.dataset.index * 0.1,
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
      //  shouldTransition
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

/* cover transitions */
/* .cover-enter-from {
  transform: translateY(100%);
}
.cover-enter-active {
  transition: transform 0.5s ease-in-out;
} */
</style>
