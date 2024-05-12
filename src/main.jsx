import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Error from './pages/Error';
import Queries from './pages/Queries';
import MyQueries from './pages/MyQueries';
import PrivateRoute from './pages/PrivateRoute'
import AddQueries from './pages/AddQueries';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path : '/queries',
        element : <Queries></Queries>
      },
      {
        path : '/myQueries',
        element : <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
      },
      {
        path : '/add',
        element : <AddQueries></AddQueries>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
