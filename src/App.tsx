import { Route, Routes } from 'react-router-dom';
import { GlobalStyles, Layout, Public, Header, RequireAuth } from './components';
import { Login, Signup} from './features/auth';

function App() {
  return (
    <>
      {/* <Header/> */}
      <GlobalStyles/>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />}/>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path='/protected' element={<h1>protected route</h1>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
