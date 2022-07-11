import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AddForm from "./components/AddForm";
import Tasks from "./components/Tasks";
import initialTasks from "./initialTasks";

const App = () => {
  const [view, setView] = useState("all");
  const [tasks, setTasks] = useState(initialTasks);
  useEffect(() => {
    const currentDiv = document.getElementsByClassName(view);
    currentDiv[0].classList.add("state-border");
  }, []);

  const changeView = (event: React.MouseEvent<HTMLElement>) => {
    const value = event.currentTarget.innerText.toLowerCase();
    const allDivs = Array.from(document.getElementsByClassName("empty"));
    allDivs.forEach((a) => {
      a.classList.remove("state-border");
    });
    const currentDiv = document.getElementsByClassName(value);
    currentDiv[0].classList.add("state-border");
    setView(value);
  };
  const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
    const currentTaskId = Number(event.currentTarget.id);
    const currentTasks = tasks.map((t): any => {
      if (currentTaskId === t.id) {
        t.active = !t.active;
      }
      return t;
    });
    setTasks(currentTasks);
  };
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    const currentTaskId = Number(event.currentTarget.id);
    const currentTasks = tasks.filter((t) => t.id !== currentTaskId);
    setTasks(currentTasks);
  };
  const handleDeleteAll = () => {
    const currentTasks = tasks.filter((t) => t.active);
    setTasks(currentTasks);
  };
  return (
    <div className="container mx-auto flex flex-col my-9">
      <h1 className="font-raleway font-bold text-4xl mb-28 self-center">
        #todo
      </h1>
      <NavBar changeView={changeView} />
      {view !== "completed" ? <AddForm /> : <></>}
      <Tasks
        tasks={tasks}
        handleCheck={handleCheck}
        view={view}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default App;
