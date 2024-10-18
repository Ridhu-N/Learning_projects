import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  taskList: [],
  taskSelected: {},
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTasktoList: (state, action) => {
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.taskList.push(task);
    },
    removeTaskfromList: (state, action) => {
      state.taskList = state.taskList.filter((task) => 
        task.id !== action.payload.id
      );
    },
    editTaskInList: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
  setTaskSelected: (state, action) => {
    state.taskSelected = action.payload;
  },
});
export const { addTasktoList, removeTaskfromList, editTaskInLists } = taskSlice.actions;
export default taskSlice.reducer;
