import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CONTEXT } from './config';
import Layout from './layouts/Layout';
import PackageInfo from './pages/PackageInfo/PackageInfo';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={`${CONTEXT}/`}>
            <PackageInfo></PackageInfo>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
