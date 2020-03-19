import create from "zustand";
import effects from "./effects";
import { logger, immer, computedmw } from "../../helpers/middleware";

const initialState = {
  loading: false,
  saving: false,
  error: "",
  comments: [],
  modalShow: false,
  comment: {
    id: 0,
    title: "",
    body: ""
  }
};

const computed = {
  totalRows(state) {
    return state.comments.length;
  },
  chars(state){
    return state.comments.reduce( (total,item)=> total+String(item.body).length, 0)
  }
};

const store = (set, get) => ({
  ...initialState,
  effects: effects(set, get),
  computed
});


const [useStore] = create(logger(computedmw(store)));

export { useStore };
