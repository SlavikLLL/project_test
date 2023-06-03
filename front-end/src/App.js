import React from 'react';
import Navbar from './components/Navbar';
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import Mygigs from './pages/mygigs/myGigs';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Add from './pages/home/add/Add';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const queryClient = new QueryClient()


const Layout = () =>{
  return(
    <div className='app'>
   <QueryClientProvider client={queryClient}>
    <Navbar />
    <Outlet />
    <Footer />
    </QueryClientProvider>

    </div>
    
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gigs',
        element: <Gigs />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },


      {
        path: '/gig/:id',
        element: <Gig />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/mygigs',
        element: <Mygigs />
      },
      {
        path: '/add',
        element: <Add />
      },
      {
        path: '/message/:id',
        element: <Message />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      


    ]
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />

   </>
  );
}

export default App;
