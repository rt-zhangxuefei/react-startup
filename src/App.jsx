import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CONTEXT } from './config';
import Index from './pages/Index/Index';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={`${CONTEXT}/`} render={() => <Redirect to="/index" />} />
          <Route path={`${CONTEXT}/index`} component={Index} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
