export interface todo {
  id: number;
  title: string;
  active: boolean;
}
const initialTasks: todo[] = [
  {
    id: 0,
    title: "Task One",
    active: true,
  },
  {
    id: 1,
    title: "Task Two",
    active: true,
  },
  {
    id: 2,
    title: "Task Three",
    active: true,
  },
  {
    id: 3,
    title: "Task Four",
    active: true,
  },
  {
    id: 4,
    title: "Task Five",
    active: true,
  },
];

export default initialTasks;
