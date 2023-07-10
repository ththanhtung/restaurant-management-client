import { Route, Routes } from 'react-router-dom';
import { GlobalStyles, Layout, Public, Header } from './components';
import { Login, RequireAuth, Signup} from './features/auth';

function App() {
  return (
    <>
      {/* <Header/> */}
      <GlobalStyles/>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />}></Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}></Route>
      </Routes>
    </>
  );
}

export default App;
