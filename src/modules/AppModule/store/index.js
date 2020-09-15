import actions from "./app.actions";
import mutations from "./app.mutations";
import state from "./app.state";
import getters from "./app.getters";

export const app = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
