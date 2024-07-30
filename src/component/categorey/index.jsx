const [project, setProject] = React.useState([]);
const [inputValue, setInputValue] = React.useState([]);
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const addCategory = () => {
  if (inputValue.length === 0) {
    alert("Please enter a category");
  } else {
    const newCategory = { id: uuidv4(), title: inputValue, isEditing: false };
    const updatedProject = [...project, newCategory];
    setProject(updatedProject);
    localStorage.setItem("categories", JSON.stringify(updatedProject));
    setInputValue("");
  }
};

export const editTodos = (id) => {
  const updatedProject = project.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isEditing: !todo.isEditing };
    }
    return todo;
  });
  setProject(updatedProject);
};

export const editTask = (title, id) => {
  const updatedProject = project.map((todo) => {
    if (todo.id === id) {
      return { ...todo, title, isEditing: !todo.isEditing };
    }
    return todo;
  });
  setProject(updatedProject);

  if (isEditing == true) {
    localStorage.setItem("categories", JSON.stringify(categories));
  }
};
useEffect(() => {
  const categories = JSON.parse(localStorage.getItem("categories"));
  if (Array.isArray(categories)) {
    setProject(categories);
  }
}, []);
