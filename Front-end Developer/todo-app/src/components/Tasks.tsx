import { todo } from "../initialTasks";
import Delete from "@mui/icons-material/DeleteOutlined";

const Tasks = ({
  tasks,
  view,
  handleCheck,
  handleDelete,
  handleDeleteAll,
}: {
  tasks: todo[];
  view: string;
  handleCheck: (event: React.MouseEvent<HTMLElement>) => void;
  handleDelete: (event: React.MouseEvent<HTMLElement>) => void;
  handleDeleteAll: () => void;
}) => {
  if (view === "all") {
    return (
      <div>
        {tasks.map((t): any => {
          return (
            <form
              key={t.id}
              className="task-form text-lg py-2 font-montserrat px-7"
            >
              <input
                type="checkbox"
                value={t.title}
                className="w-6 h-6 align-middle"
                name={t.title}
                id={t.id.toString()}
                onClick={handleCheck}
                defaultChecked={!t.active}
              />
              <label
                htmlFor={t.title}
                className="align-middle px-2 strike-through"
              >
                {t.title}
              </label>
            </form>
          );
        })}
      </div>
    );
  } else if (view === "active") {
    return (
      <div>
        {tasks
          .filter((t) => t.active)
          .map((t): any => {
            return (
              <form
                key={t.id}
                className="task-form text-lg py-2 font-montserrat px-7"
              >
                <input
                  type="checkbox"
                  value={t.title}
                  className="w-6 h-6 align-middle"
                  name={t.title}
                  id={t.id.toString()}
                  onClick={handleCheck}
                  defaultChecked={!t.active}
                />
                <label
                  htmlFor={t.title}
                  className="align-middle px-2 strike-through"
                >
                  {t.title}
                </label>
              </form>
            );
          })}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {tasks
            .filter((t) => !t.active)
            .map((t): any => {
              return (
                <form
                  key={t.id}
                  className="task-form text-lg py-2 font-montserrat px-7"
                >
                  <input
                    type="checkbox"
                    value={t.title}
                    className="w-6 h-6 align-middle"
                    name={t.title}
                    id={t.id.toString()}
                    onClick={handleCheck}
                    defaultChecked={!t.active}
                  />
                  <label
                    htmlFor={t.title}
                    className="align-middle px-2 strike-through"
                  >
                    {t.title}
                  </label>
                  <div
                    className="float-right hover:cursor-pointer"
                    onClick={handleDelete}
                    id={t.id.toString()}
                  >
                    <Delete color="disabled" />
                  </div>
                </form>
              );
            })}
        </div>
        {tasks.filter((t) => !t.active).length > 0 ? (
          <button
            className="py-3 px-8 bg-red-500 rounded text-white align-middle my-8 float-right hover:bg-red-400"
            onClick={handleDeleteAll}
          >
            <Delete /> delete all
          </button>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default Tasks;
