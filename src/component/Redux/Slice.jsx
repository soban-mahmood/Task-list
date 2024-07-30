import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  project: JSON.parse(localStorage.getItem("added-items")) || [],
  inputValue: "",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      if (action.payload.trim() === "") {
        alert("Please enter a category");
      } else {
        const newCategory = {
          id: uuidv4(),
          title: action.payload,
          isEditing: false,
        };
        state.project.push(newCategory);
        localStorage.setItem("added-items", JSON.stringify(state.project));
      }
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const category = state.project.find((todo) => todo.id === id);
      if (category) {
        category.title = title;
        category.isEditing = false;
        localStorage.setItem("added-items", JSON.stringify(state.project));
      } else {
        console.error(`Category with id ${id} not found`);
      }
    },
    editTodo: (state, action) => {
      const { id } = action.payload;
      const category = state.project.find((todo) => todo.id === id);
      if (category) {
        category.isEditing = !category.isEditing;
      } else {
        console.error(`Category with id ${id} not found`);
      }
    },
  },
});

export const { addCategory, editTodo, editTask } = projectSlice.actions;
export default projectSlice.reducer;
