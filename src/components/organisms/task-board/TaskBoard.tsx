import { ITask, TaskStatus } from 'models/task';

import TaskColumn, {
  ColumnConfiguration,
} from 'components/molecules/task-column/TaskColumn';

import './TaskBoard.scss';

export type BoardConfiguration = {
  columns: ColumnConfiguration[];
};

const boardConfiguration: BoardConfiguration = {
  columns: [
    { id: TaskStatus.PLAN, title: 'planned' },
    { id: TaskStatus.IN_PROGRESS, title: 'in progress' },
    { id: TaskStatus.TESTING, title: 'in testing' },
    { id: TaskStatus.DONE, title: 'done' },
  ],
};

type PropTypes = {
  taskArray: ITask[];
};

const TaskBoard = ({ taskArray }: PropTypes) => {
  return (
    <div className="task-board">
      {boardConfiguration.columns.map((columnConfing) => (
        <TaskColumn
          key={columnConfing.id}
          config={columnConfing}
          taskArray={taskArray.filter(
            (task) => task.status === columnConfing.id
          )}
        ></TaskColumn>
      ))}
    </div>
  );
};

export default TaskBoard;
