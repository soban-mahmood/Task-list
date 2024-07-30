import React, { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";

function Editcate({ editTasks, title, id }) {
  const [input, setInput] = useState(title);

  useEffect(() => {
    setInput(title);
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTasks(input, id);
    setInput("");
  };

  return (
    <div>
      <div className="flex mt-3">
        <div onClick={handleSubmit}>
          <FaLocationArrow className="text-[#0034df] text-[20px] h-[40px] w-[90px] hover:text-[#6e968c]" />
        </div>
        <input
          type="text"
          name="title"
          id="title"
          value={input}
          placeholder="Update Title"
          onChange={(e) => setInput(e.target.value)}
          className="py-3 px-3 bg-[#0034df] w-[695px] text-white font-bold outline-none"
        />
      </div>
    </div>
  );
}

export default Editcate;
