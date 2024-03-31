import { observer } from 'mobx-react-lite';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { TaskStatus } from 'models/task';
import { ITaskStore } from 'storages/task.storage';

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
  store: ITaskStore;
};

const TaskBoard = observer(({ store }: PropTypes) => {
  const taskArray = store.tasks;

  const dragHandler = (result: DropResult) => {
    const destinationStatus = result.destination?.droppableId;
    const sourceStatus = result.source.droppableId;

    if (destinationStatus) {
      if (destinationStatus !== sourceStatus) {
        store.updateTaskStatusById(
          result.draggableId,
          destinationStatus as TaskStatus
        );
      }
    }
  };

  return (
    <DragDropContext onDragEnd={dragHandler}>
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
    </DragDropContext>
  );
});

export default TaskBoard;
