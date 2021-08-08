import MainTemplate from 'components/templates/main-template/MainTemplate';
import { observer } from 'mobx-react-lite';
import { taskStore } from 'storages/task.storage';

const HomePage = observer(() => {
  return <MainTemplate title="Home" taskArray={taskStore.tasks} />;
});

export default HomePage;
