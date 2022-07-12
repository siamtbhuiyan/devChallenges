import { useEffect } from "react";
import NavBar from "./components/NavBar";
import AddForm from "./components/AddForm";
import Tasks from "./components/Tasks";
import initialTasks from "./initialTasks";
import { todo } from "./initialTasks";
import usePersistedState from "./hooks";

const App = () => {
  const [view, setView] = usePersistedState("all", "all");
  const [tasks, setTasks] = usePersistedState(initialTasks, "tasks");
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
  const handleAdd = (event: any) => {
    event.preventDefault();
    const formVal = (document.getElementById("form-input") as HTMLInputElement)
      .value;
    const newTask: todo = {
      id: Date.now(),
      title: formVal,
      active: true,
    };
    const currentTasks = [...tasks, newTask];
    setTasks(currentTasks);
    (document.getElementById("form-input") as HTMLInputElement).value = "";
  };
  return (
    <div className="container mx-auto flex flex-col my-9">
      <h1 className="font-raleway font-bold text-4xl mb-28 self-center">
        #todo
      </h1>
      <NavBar changeView={changeView} />
      {view !== "completed" ? <AddForm handleAdd={handleAdd} /> : <></>}
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
