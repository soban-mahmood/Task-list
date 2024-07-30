import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditTodo from "./EditTodo";
import Categories from "../categorey/Categories";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState([]);

  const addTodo = async (todo, date, select) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      date: date,
      category: select,
    };

    const val = [...todos, newTodo];

    await setDoc(doc(db, "Tasks", newTodo.id), {
      name: newTodo.task,
      date: newTodo.date,
      category: newTodo.category,
      completed: false,
    });

    setTodos(val);
    localStorage.setItem("val", JSON.stringify(val));
  };
  const removeTodos = (id) => {
    const val = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(val);
    localStorage.setItem("val", JSON.stringify(val));
  };

  const editTodos = (id) => {
    const val = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });

    setTodos(val);
  };

  const editTask = (task, id, date, select) => {
    const val = todos.map((todo) =>
      todo.id === id
        ? { ...todo, task, category: select, isEditing: !todo.isEditing, date }
        : todo
    );
    setTodos(val);
    if (val.length > 0) {
      localStorage.setItem("val", JSON.stringify(val));
    }
  };

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("val"));
    if (val) {
      setTodos(val);
    }
  }, []);

  const CompletedTodo = (id, select) => {
    const val2 = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
            category: select,
          }
        : todo
    );
    setTodos(val2);
    localStorage.setItem("val", JSON.stringify(val2));
  };

  return (
    <div className="w-full h-screen  p-6 ">
      <h1 className="text-black m-2"> Add Categories :</h1>
      <Categories />
      <h1 className="text-black :">Add Todos :</h1>
      <Todo addTodo={addTodo} todos={todos} />
      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <EditTodo key={todo.id} task={todo} editTask={editTask} date={date} />
        ) : (
          <TodoForm
            CompletedTodo={CompletedTodo}
            date={todo.date}
            key={index}
            task={todo.task}
            removeTodos={removeTodos}
            editTodos={editTodos}
            todos={todo}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
