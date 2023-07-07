import { Route, Routes } from 'react-router-dom';
import { GlobalStyles, Layout, Public } from './components';
import { RequireAuth, Signup } from './features/auth';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />}></Route>
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<RequireAuth />}></Route>
      </Routes>
    </>
  );
}

export default App;
