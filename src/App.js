import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CONTEXT } from './config';
import Index from './pages/Index/Index';
import Layout from './layouts/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path={`${CONTEXT}/`} render={() => <Redirect to="/index" />} />
          <Route path={`${CONTEXT}/index`} component={Index} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
