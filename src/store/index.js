import { createStore } from "vuex";

export const store = createStore({
  state: {
    menuIndex: 0, // 菜单
  },
  mutations: {
    SET_MENU_INDEX(state, payload) {
      state.menuIndex = payload;
    },
  },
  actions: {
    setMenuIndex(context, payload) {
      context.commit("SET_MENU_INDEX", payload);
    },
  },
});

