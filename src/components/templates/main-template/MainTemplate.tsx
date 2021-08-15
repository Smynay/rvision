import DefaultLayout, {
  DefaultLayoutNestedPropTypes,
} from 'components/layouts/default-layout/DefaultLayout';
import TaskBoard from 'components/organisms/task-board/TaskBoard';
import { ITaskStore } from 'storages/task.storage';

import './MainTemplate.scss';

type PropTypes = DefaultLayoutNestedPropTypes & {
  taskStore: ITaskStore;
};

const MainTemplate = ({ title, taskStore }: PropTypes) => {
  return (
    <DefaultLayout title={title}>
      <TaskBoard store={taskStore} />
    </DefaultLayout>
  );
};

export default MainTemplate;
