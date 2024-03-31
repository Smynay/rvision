import { Box, Typography } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { TaskPriority } from 'models/task';

import './StatusIndicator.scss';

type PropTypes = {
  status: TaskPriority;
};

const StatusIndicator = ({ status }: PropTypes) => {
  return (
    <Box display="flex" alignItems="center" className="status-indicator">
      {status === TaskPriority.COULD && (
        <ExpandLessIcon fontSize="small" color="disabled" />
      )}
      {status === TaskPriority.SHOULD && (
        <KeyboardCapslockIcon fontSize="small" color="primary" />
      )}
      {status === TaskPriority.MUST && (
        <ArrowUpwardIcon fontSize="small" color="secondary" />
      )}
      <Typography component="p" variant="caption">
        {status}
      </Typography>
    </Box>
  );
};

export default StatusIndicator;
