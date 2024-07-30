import React, { useEffect } from "react";
import { MdEditSquare } from "react-icons/md";

const EditForm = ({ editTodos, id, title }) => {
  useEffect(() => {
    if (id.isEditing) {
      console.log({ title });
    }
  }, [id]);

  return (
    <div>
      <div className="shadow-lg font-bold  px-2 py-3 flex justify-evenly mt-2 text-black">
        {title}
        {title ? (
          <div onClick={() => editTodos(id)}>
            <MdEditSquare className="text-[20px] text-[#0034df]" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EditForm;
