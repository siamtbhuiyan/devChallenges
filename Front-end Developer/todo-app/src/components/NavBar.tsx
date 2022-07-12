const NavBar = ({
  view,
  changeView,
}: {
  view: string;
  changeView: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <div className="flex justify-around border-b border-gray-300 font-montserrat font-semibold">
      <a href="#" className="flex flex-col items-center" onClick={changeView}>
        <div className="py-4">All</div>
        <div className={`empty ${view === "all" ? "state-border" : ""}`}></div>
      </a>
      <a href="#" className="flex flex-col items-center" onClick={changeView}>
        <div className="py-4">Active</div>
        <div
          className={`empty ${view === "active" ? "state-border" : ""}`}
        ></div>
      </a>
      <a href="#" className="flex flex-col items-center" onClick={changeView}>
        <div className="py-4">Completed</div>
        <div
          className={`empty ${view === "completed" ? "state-border" : ""}`}
        ></div>
      </a>
    </div>
  );
};

export default NavBar;
