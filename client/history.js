import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { checkLocalStorage } from './store';
import store from './store';

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory();

const unlisten = history.listen((location, action) => {
  store.dispatch(checkLocalStorage());
});

export default history;
