import DefaultLayout, {
  DefaultLayoutNestedPropTypes,
} from 'components/layouts/default-layout/DefaultLayout';
import TaskBoard from 'components/organisms/task-board/TaskBoard';
import { ITask } from 'models/task';

import './MainTemplate.scss';

type PropTypes = DefaultLayoutNestedPropTypes & {
  taskArray: ITask[];
};

const MainTemplate = ({ title, taskArray }: PropTypes) => {
  return (
    <DefaultLayout title={title}>
      <TaskBoard taskArray={taskArray} />
    </DefaultLayout>
  );
};

export default MainTemplate;
