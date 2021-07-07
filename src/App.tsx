import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Main } from './views/Main';
import { Detail } from './views/Detail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/detail/:code" component={Detail} />
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
