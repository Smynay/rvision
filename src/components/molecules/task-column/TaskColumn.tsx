import { Box, Typography } from '@material-ui/core';

import { ITask, TaskStatus } from 'models/task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskPlate from '../task-plate/TaskPlate';

import './TaskColumn.scss';

export type ColumnConfiguration = {
  id: TaskStatus;
  title: string;
};

type PropTypes = {
  config: ColumnConfiguration;
  taskArray: ITask[];
};

const TaskColumn = ({ config, taskArray }: PropTypes) => {
  return (
    <Box component="div" p={1} className="task-column">
      <Typography className="title" variant="h6" align="center">
        {config.title}
      </Typography>
      <Droppable droppableId={config.id}>
        {(droppableProvided) => (
          <div ref={droppableProvided.innerRef} className="body">
            <Box mt={1} component={'div'}>
              {taskArray.map((task, index) => (
                <Draggable index={index} draggableId={task.id} key={task.id}>
                  {(draggableProvided) => (
                    <div>
                      <div
                        id={task.id}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <TaskPlate taskData={task} />
                      </div>
                      {droppableProvided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
            </Box>
          </div>
        )}
      </Droppable>
    </Box>
  );
};

export default TaskColumn;
