import * as AppService from "../services/app.services";
import {
  SET_DATA,
  REQUEST_DATA,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_ERROR
} from "./app.mutationTypes";

export const actions = {
  async loadData({ commit }) {
    commit(REQUEST_DATA);
    try {
      const data = await AppService.fetchData();
      commit(LOADING_DATA_SUCCESS);
      commit(SET_DATA, data);
    } catch (error) {
      commit(LOADING_DATA_ERROR, error);
    }
  }
};

export default actions;
