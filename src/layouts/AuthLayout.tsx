import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/auth' || window.location.pathname === '/auth/') {
            navigate('/auth/login');
        }
    }, [])

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100dvh' }}>
            <fieldset className="form-fieldset bg-white w-25">
                <Outlet />
            </fieldset>
        </div>
    )
}

export default AuthLayout