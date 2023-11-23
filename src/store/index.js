import { createStore } from "vuex";
import { likesModule } from "./likesModule";
import { postsModule } from "./postsModule";

export default createStore({
  modules: {
    likes: likesModule,
    posts: postsModule,
  },
});
