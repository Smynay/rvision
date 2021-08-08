import { Redirect, Route, Switch } from 'react-router-dom';

import { ERROR_PATH, MAIN_PATH } from 'utils/constants';

import HomePage from 'components/pages/HomePage';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path={`${MAIN_PATH}`} component={HomePage} />
      <Redirect to={`${ERROR_PATH}/404`} />
    </Switch>
  );
};

export default MainRouter;
