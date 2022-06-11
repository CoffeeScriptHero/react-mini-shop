import actions from "./actions";
import axios from "axios";

const getGoods = () => (dispatch, getState) => {
  dispatch(actions.setIsLoading(true));
  axios("/goods.json").then((res) => {
    dispatch(actions.saveGoods(res.data));
    dispatch(actions.setIsLoading(false));
  });
};

const operationsObj = { getGoods };

export default operationsObj;
