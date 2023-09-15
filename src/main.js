import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
const app = createApp(App);

router.beforeEach((to, from, next) => {
  // Check if the route's meta field indicates a transition is required
  if (to.meta.requiresTransition) {
    console.log("reeee");
    // Set shouldTransition to true to trigger the transition
    app.config.globalProperties.shouldTransition = true;
  } else {
    // Set shouldTransition to false if no transition is required
    app.config.globalProperties.shouldTransition = false;
  }

  next();
});

app.use(router);
app.mount("#app");
