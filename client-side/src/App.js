
import Authentification from './components/Auth/Authentification'
import { createBrowserRouter, createRoutesFromElements,Route,  Outlet, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Auth/Fitness/Home';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route >
        <Route  index element={<Authentification />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/home' element={<HomePage />} />
      </Route>
    )
  )
  return (
    <div className="App">
        <RouterProvider router={router}/>

    </div>
  );
}

// const Root = () => {
//   return <>
//     here 

//     <div>
//       <Outlet />
//     </div>
//   </>
// }

