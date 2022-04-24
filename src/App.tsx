import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Counter from './pages/counter/Counter';
import { CONTEXT } from './config';

function App() {
  return (
    <>
      <Routes>
        <Route path={CONTEXT} element={<Layout />}>
          <Route path="counter" element={<Counter />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
