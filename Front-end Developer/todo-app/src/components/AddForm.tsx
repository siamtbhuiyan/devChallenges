import React from "react";

const AddForm = () => {
  return (
    <form action="" className="w-full flex">
      <input
        type="text"
        placeholder="add details"
        className="flex-[6_6_0%] border rounded-xl border-gray-300 py-5 px-3 m-4 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="flex-1 m-4 py-5 px-10 text-white bg-blue-500 rounded-xl hover:bg-blue-400"
      >
        Add
      </button>
    </form>
  );
};

export default AddForm;
