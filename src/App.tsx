import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CONTEXT } from './config';
import BasicLayout from './layouts/BasicLayout';
import PackageInfo from './pages/PackageInfo/PackageInfo';

function App() {
  return (
    <Router>
      <BasicLayout>
        <Switch>
          <Route exact path={`${CONTEXT}/`}>
            <PackageInfo></PackageInfo>
          </Route>
        </Switch>
      </BasicLayout>
    </Router>
  );
}

export default App;
