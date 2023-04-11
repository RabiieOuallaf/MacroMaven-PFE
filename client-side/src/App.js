
import Authentification from './components/Auth/Authentification'
import { createBrowserRouter, createRoutesFromElements,Route,  Outlet, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Fitness/Home';
import BmiCalculator from './components/Fitness/BmiCalculator';
import NutritionSearchEngine from './components/Fitness/NutritionSearchEngine';
import Profile from './components/Users/Profile';
import Chat from './components/Users/Chat';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route >
        <Route  index element={<Authentification />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/home' element={<HomePage />} />
        <Route path='/bmicalculator' element={<BmiCalculator />} />
        <Route path='/nutritionsearch' element={<NutritionSearchEngine />} />
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/chat' element={<Chat />} />
      
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

