import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="page">
            <Outlet />
        </div>
    )
}

export default RootLayout