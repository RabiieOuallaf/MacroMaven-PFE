
import Authentification from './components/Authentification'
import { createBrowserRouter, createRoutesFromElements,Route, Link, Outlet, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route >
        <Route  index element={<Authentification />}/>
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

