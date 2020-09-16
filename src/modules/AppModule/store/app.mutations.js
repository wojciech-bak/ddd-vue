import * as TYPES from "./app.mutationTypes";

export const mutations = {
  [TYPES.REQUEST_DATA]: state => {
    state.loading = true;
  },

  [TYPES.LOADING_DATA_SUCCESS]: state => {
    state.loading = false;
  },

  [TYPES.SET_DATA]: (state, data) => {
    state.data = data;
  },

  [TYPES.LOADING_DATA_ERROR]: (state, error) => {
    state.loading = false;
    state.error = error;
  }
};

export default mutations;
