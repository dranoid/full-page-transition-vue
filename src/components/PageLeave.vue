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
      {{ box }}
    </div>
  </TransitionGroup>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  props: {
    // leaveTransition: Boolean,
  },
  setup(props) {
    const boxes = ref([1, 2, 3, 4, 5]);

    const beforeEnter = (el) => {
      // // When the page is openned (leavetransition is undefined)
      // console.log("leave is false from from");
      // el.style.transform = "translateY(0);";
      // If the user clicks on a nav link (leavetransition is true)
      console.log("leave is true from from");
      el.style.transform = "translateY(100%);";
      // el.style.transform = "translateY(0);";
    };
    const enter = (el, done) => {
      // When the page is openned (leavetransition is undefined)
      console.log("leave is false from to");
      gsap.to(el, {
        duration: 1.3,
        onComplete: done,
        yPercent: -230,
        delay: el.dataset.index * 0.1,
      });
      // If the user clicks on a nav link (leavetransition is true)
      //   console.log(el.classList.contains("box5"), "elem");
      if (el.classList.contains("box5")) {
        el.style.zindex = 30;
      }
      console.log("leave is true from to");
      gsap.to(el, {
        duration: 0.5,
        onComplete: done,
        yPercent: -100,
        delay: el.dataset.index * 0.1,
      });
    };
    const afterEnter = (el) => {
      // Remove the element from the DOM after the leave transition
      el.remove();
      console.log("weee");
    };

    // console.log(props.leaveTransition, "leave");

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
