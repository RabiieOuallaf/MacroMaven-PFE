
import Authentification from './components/Authentification'
import { createBrowserRouter, createRoutesFromElements,Route,  Outlet, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/LoginPage';


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route >
        <Route  index element={<Authentification />}/>
        <Route path='/register' element={<RegisterPage />} />
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

