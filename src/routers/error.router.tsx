import { Redirect, Route, Switch } from 'react-router-dom';

import { ERROR_PATH } from 'utils/constants';

import ErrorPage from 'components/pages/ErrorPage';

const ErrorRouter = () => {
  return (
    <Switch>
      <Route path={`${ERROR_PATH}/404`} component={ErrorPage} />
      <Redirect to={`${ERROR_PATH}/404`} />
    </Switch>
  );
};

export default ErrorRouter;
