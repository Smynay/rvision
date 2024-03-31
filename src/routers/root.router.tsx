import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ERROR_PATH, MAIN_PATH } from 'utils/constants';

import MainRouter from './main.router';
import ErrorRouter from './error.router';

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={`${ERROR_PATH}`} component={ErrorRouter} />
        <Route path={`${MAIN_PATH}`} component={MainRouter} />
        <Redirect to={`${ERROR_PATH}/404`} />
      </Switch>
    </Router>
  );
};

export default RootRouter;
