import { NavLink } from 'react-router-dom'

interface NavItemProps {
    path: string
    isActive: boolean
    children: string
    dropdownMenus?: Array<{
        path: string
        name: string
    }>
}

const NavItem = ({ path, isActive, children, dropdownMenus }: NavItemProps) => {
    if (dropdownMenus) {
        const menus = dropdownMenus.map((menu, index) => {
            return (
                <NavLink className={({ isActive }) => isActive ? "dropdown-item" : "dropdown-item"} key={index} to={`${path}${menu.path}`}>{menu.name}</NavLink>
            )
        })

        return (
            <li className={`nav-item dropdown ${isActive ? 'active' : ''}`}>

                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="true">
                    <span className="nav-link-title">
                        {children}
                    </span>
                </a>
                <div className="dropdown-menu" data-bs-popper="static">
                    {menus}
                </div>
            </li>
        )
    } else {
        console.log(isActive)
        return (
            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                <NavLink to={path} className="nav-link">{children}</NavLink>
            </li>
        )
    }
}

export default NavItem