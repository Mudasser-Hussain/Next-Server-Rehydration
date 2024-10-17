import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../configureStore";
import { apiRequest } from "../asyncActions";
import { Todos, TodosResponse } from "@/lib/todoapi";




export type TodosData = {
  list: TodosResponse | null;
  loading: boolean;
  
};

const initialState: TodosData = {
  list: null,
  loading: false,
};


const slice = createSlice({
  name: 'todoswithapi',
  initialState,

  reducers: {
    todosRequested: (todos) => {
      todos.loading = true;
    },
    todosReceived: (todos, action) => {
      todos.list = action.payload
      todos.loading = false;
    },
    todosRequestFailed: (todos) => {
        todos.loading = false;
    },
  },
});

const todosReducer = slice.reducer;

// Action Creators


export const loadtodosAsync = () => async (dispatch: AppDispatch) =>  await dispatch(
    apiRequest({
      httpFn: Todos.all,
      onStart: slice.actions.todosRequested.type,
      onSuccess: slice.actions.todosReceived.type,
      onError: slice.actions.todosRequestFailed.type,
    })
  );

export const TodoHydrate = (payload: TodosResponse) => {
  return {
    type: slice.actions.todosReceived.type,
    payload,
  };
};

// export reducer functions
export { todosReducer };

// default export reducer function
export default slice.reducer;
