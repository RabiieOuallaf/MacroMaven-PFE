
import Authentification from './components/Auth/Authentification'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Fitness/Home';
import BmiCalculator from './components/Fitness/BmiCalculator';
import NutritionSearchEngine from './components/Fitness/NutritionSearchEngine';
import Profile from './components/Users/Profile';
import Chat from './components/Users/Chat';
import { BmiContextProvider } from './Contexts/BmiDataContextProvider';
import { DietContextProvider } from './Contexts/SuggestedDietContextProvider';
import UpdateProfile from './components/Users/UpdateProfile';
import WorkoutPage from './components/Fitness/WorkoutPage';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route >
        <Route index element={
          <BmiContextProvider>
            <Authentification />
          </BmiContextProvider>
          
          } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={

            <DietContextProvider>
              <HomePage />
            </DietContextProvider>

        } />
        <Route path='/bmicalculator' element={
          <BmiContextProvider>
              <BmiCalculator />
          </BmiContextProvider>
        } />
        <Route path='/nutritionsearch' element={
        
          <DietContextProvider>
            <NutritionSearchEngine />
          </DietContextProvider>
          
          } />
        <Route path='/profile' element={<Profile />} />

        <Route path='/profile/update' element={<UpdateProfile />}/>

        <Route path='/chat' element={<Chat />} />

        <Route path='/workout' element={<WorkoutPage />}/>

      </Route>
    )
  )

  return (
    <div className="App">

      <RouterProvider router={router} />
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

