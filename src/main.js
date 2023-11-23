import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/ui";
import router from "./router/router";
const app = createApp(App);
import directives from "@/directives";
import store from "@/store";

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(router).use(store).mount("#app");
