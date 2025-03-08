import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import AddCar from './components/AddCar.jsx'
import FindOne from './components/FindOne.jsx'
import Private from './private/Private.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        loader: () => fetch('http://localhost:4000/'),
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/add',
        element: (
            <Private>
                <AddCar></AddCar>
            </Private>
        ),
    },
    {
        path: '/find/:id',
        element: (
            <Private>
                <FindOne></FindOne>
            </Private>
        ),
        loader: ({ params }) =>
            fetch(`http://localhost:4000/find/${params.id}`),
    },
])
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>
)
