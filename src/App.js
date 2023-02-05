import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import RequireAuth from './Components/Auth/RequireAuth';
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import LinkPage from './Components/LinkPage/LinkPage';
import Login from "./Components/Login/Login";
import Register from './Components/Login/Register';
import Lounge from './Components/Lounge/Lounge';
import Missing from './Components/Missing/Missing';
import Unauthorized from './Components/Unauthorized/Unauthorized';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          {/* public routes  */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/linkpage' element={<LinkPage />} />
          <Route path='/unathourized' element={<Unauthorized />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>


          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>

        {/* protected privated routes
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/lounge' element={<Lounge />} />
          </Route> */}


        {/* catch all path  Missing page */}
        {/* <Route path='*' element={<Missing />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
