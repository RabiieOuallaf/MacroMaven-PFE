
import Authentification from './components/Auth/Authentification'
import { createBrowserRouter, createRoutesFromElements,Route,  Outlet, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Auth/Fitness/Home';
import BmiCalculator from './components/Auth/Fitness/BmiCalculator';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route >
        <Route  index element={<Authentification />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/home' element={<HomePage />} />
        <Route path='/bmicalculator' element={<BmiCalculator />} />
      
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

