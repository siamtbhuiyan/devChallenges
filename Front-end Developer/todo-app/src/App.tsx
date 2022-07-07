import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AddForm from "./components/AddForm";

const App = () => {
  const [view, setView] = useState("all");
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
  return (
    <div className="container mx-auto flex flex-col my-9">
      <h1 className="font-raleway font-bold text-4xl mb-28 self-center">
        #todo
      </h1>
      <NavBar changeView={changeView} />
      {view !== "completed" ? <AddForm /> : <></>}
    </div>
  );
};

export default App;
