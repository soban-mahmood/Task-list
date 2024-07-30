import React from "react";
import { ImCross } from "react-icons/im";
import { MdEditSquare } from "react-icons/md";
import { Checkbox } from "antd";
function TodoForm({
  removeTodos,
  task,
  todos,
  editTodos,
  date,
  CompletedTodo,
}) {
  return (
    <>
      <div className="mt-3 mb-3 py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly ">
        <div> {task} </div>
        <div>{date}</div>
        <div>{todos?.category?.label}</div>

        {task ? (
          <div className="flex justify-evenly  gap-10">
            <div
              onClick={() => editTodos(todos?.id)}
              className="text-[20px] text-[#0034df] "
            >
              <MdEditSquare />
            </div>
            <div
              onClick={() => removeTodos(todos?.id)}
              className="text-[20px] text-[#0034df]"
            >
              <ImCross />
            </div>
            <Checkbox
              className="border bg-[#0034df] px-2  rounded text-white"
              onChange={() => {
                CompletedTodo(todos?.id);
              }}
              defaultChecked={todos?.isCompleted}
            >
              Completed
            </Checkbox>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TodoForm;
