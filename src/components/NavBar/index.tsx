import NavList from './components/NavList'

const NavBar = () => {
    return (
        <header className="navbar-expand-md navbar-light">
            <div className="collapse navbar-collapse" id="navbar-menu">
                <nav className="navbar navbar-light">
                    <div className="container-xl">
                        
                        <div className="row flex-fill align-items-center">
                            <div className="col">
                                <NavList />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar