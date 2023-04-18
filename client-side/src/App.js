
import Authentification from './components/Auth/Authentification'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Fitness/Home';
import BmiCalculator from './components/Fitness/BmiCalculator';
import NutritionSearchEngine from './components/Fitness/NutritionSearchEngine';
import Profile from './components/Users/Profile';
import Chat from './components/Users/Chat';
import { useState } from 'react';
import { BmiContext, BmiContextProvider } from './Contexts/BmiDataContextProvider';
import { DietContextProvider } from './Contexts/SuggestedDietContextProvider';

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

          <BmiContextProvider>
            <DietContextProvider>
              <HomePage />
            </DietContextProvider>
          </BmiContextProvider>

        } />
        <Route path='/bmicalculator' element={
          <BmiContextProvider>
            <DietContextProvider>
              <BmiCalculator />
            </DietContextProvider>
          </BmiContextProvider>
        } />
        <Route path='/nutritionsearch' element={<NutritionSearchEngine />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<Chat />} />

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

