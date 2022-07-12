import NavBar from "./components/NavBar";
import AddForm from "./components/AddForm";
import Tasks from "./components/Tasks";
import initialTasks from "./initialTasks";
import { todo } from "./initialTasks";
import usePersistedState from "./hooks";
import React from "react";
import Footer from "./components/Footer";

const App = () => {
  const [view, setView] = usePersistedState("all", "view");
  const [tasks, setTasks] = usePersistedState(initialTasks, "tasks");
  const [formValue, setFormValue] = usePersistedState("", "formValue");

  const changeView = (event: React.MouseEvent<HTMLElement>) => {
    const value = event.currentTarget.innerText.toLowerCase();
    setView(value);
  };
  const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
    const currentTaskId = Number(event.currentTarget.id);
    const currentTasks = tasks.map((t: todo) => {
      if (currentTaskId === t.id) {
        t.active = !t.active;
      }
      return t;
    });
    setTasks(currentTasks);
  };
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    const currentTaskId = Number(event.currentTarget.id);
    const currentTasks = tasks.filter((t: todo) => t.id !== currentTaskId);
    setTasks(currentTasks);
  };
  const handleDeleteAll = () => {
    const currentTasks = tasks.filter((t: todo) => t.active);
    setTasks(currentTasks);
  };
  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask: todo = {
      id: Date.now(),
      title: formValue,
      active: true,
    };
    const currentTasks = [...tasks, newTask];
    setTasks(currentTasks);
    setFormValue("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.currentTarget.value);
  };
  return (
    <div className="container mx-auto flex flex-col my-9 min-h-[calc(100vh-72px)]">
      <h1 className="font-raleway font-bold text-4xl mb-28 self-center">
        #todo
      </h1>
      <NavBar view={view} changeView={changeView} />
      {view !== "completed" ? (
        <AddForm
          handleAdd={handleAdd}
          handleChange={handleChange}
          formValue={formValue}
        />
      ) : (
        <></>
      )}
      <Tasks
        tasks={tasks}
        handleCheck={handleCheck}
        view={view}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
      <Footer />
    </div>
  );
};

export default App;
