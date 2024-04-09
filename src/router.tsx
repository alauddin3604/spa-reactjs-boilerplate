import AuthLayout from '@/layouts/AuthLayout'
import RootLayout from '@/layouts/RootLayout'
import ForgotPassword from '@/pages/Auth/ForgotPassword'
import Login from '@/pages/Auth/Login'
import Home from '@/pages/Home'
import UserIndex from '@/pages/Users'
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RoleIndex } from '@/pages/settings/roles'

interface Routes {
    path: string
    name: string
    element: JSX.Element
    children?: Array<{path: string, name: string, element: JSX.Element}>
}

const routes: Array<Routes> = [
    {
        path: 'auth',
        name: 'auth-layout',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                name: 'login',
                element: <Login />,
            },
            {
                path: 'forgot-password',
                name: 'forgot-password',
                element: <ForgotPassword />
            },
        ],
    },
    {
        path: '/',
        name: 'home-layout',
        element: <Home />,
        children: [
            {
                path: 'users',
                name: 'user-index',
                element: <UserIndex />,
            },
            {
                path: 'settings/roles',
                name: 'settings-role',
                element: <RoleIndex />
            }
        ],
    }
]

const pageRoutes = routes.map(({ path, name, element, children }) => {
    if (children) {
        const childrenElement = children.map(({ path, element }) => {
            return <Route key={name} path={path} element={element} />
        })

        return (
            <Route key={name} path={path} element={element}>
                {childrenElement}
            </Route>
        )
    } else {
        return <Route key={name} path={path} element={element} />
    }
})

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {pageRoutes}
            <Route path="login" element={<Navigate to="/auth/login" />} />
        </Route>
    )
)

export default router