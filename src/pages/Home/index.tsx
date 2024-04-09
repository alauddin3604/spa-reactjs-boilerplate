import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="page-wrapper">
                <div className="page-body">
                    <div className="container-xl">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home