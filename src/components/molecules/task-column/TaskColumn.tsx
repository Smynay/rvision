import { Box, Typography } from '@material-ui/core';

import { ITask, TaskStatus } from 'models/task';
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
      <Box id={config.id} mt={1} className="body">
        {taskArray.map((task) => (
          <TaskPlate key={task.id} taskData={task} />
        ))}
      </Box>
    </Box>
  );
};

export default TaskColumn;
