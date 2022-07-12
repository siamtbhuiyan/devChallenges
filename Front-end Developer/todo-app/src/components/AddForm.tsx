const AddForm = ({
  formValue,
  handleAdd,
  handleChange,
}: {
  formValue: string;
  handleAdd: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form action="" className="w-full flex" onSubmit={handleAdd}>
      <input
        id="form-input"
        type="text"
        placeholder="add details"
        className="flex-[6_6_0%] border rounded-xl border-gray-300 py-5 px-3 m-4 focus:outline-none focus:border-blue-500"
        onChange={handleChange}
        value={formValue}
      />
      <input
        type="submit"
        className="flex-1 m-4 py-5 px-10 text-white bg-blue-500 rounded-xl hover:bg-blue-400"
        value="Add"
      />
    </form>
  );
};

export default AddForm;
