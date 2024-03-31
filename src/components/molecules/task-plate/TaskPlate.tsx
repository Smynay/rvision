import { Box, Card, Typography } from '@material-ui/core';

import { ITask } from 'models/task';
import StatusIndicator from '../status-indicator/StatusIndicator';

import './TaskPlate.scss';

type PropTypes = {
  taskData: ITask;
};

const TaskPlate = ({ taskData }: PropTypes) => {
  return (
    <Card className="task-plate">
      <Box p={1}>
        <Typography
          component="h6"
          variant="caption"
          color="textSecondary"
          gutterBottom
        >
          {taskData.id}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {taskData.title}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <StatusIndicator status={taskData.priority} />
          <Typography
            component="p"
            variant="caption"
            color="textSecondary"
            align="right"
          >
            {`${taskData.name} ${taskData.surname}`}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TaskPlate;
