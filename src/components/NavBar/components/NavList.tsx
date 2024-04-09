import NavItem from '@/components/NavBar/components/NavItem'
import { useLocation } from 'react-router-dom'

const NavList = () => {
    const location = useLocation()

    const isActive = (path: string): boolean => {
        if (path.includes('settings') && location.pathname.includes('settings')) {
            return true
        }
        return location.pathname === path
    }

    interface NavLinks {
        icon: string
        path: string
        name: string
        dropdownMenus?: Array<{
            path: string
            name: string
        }>
    }

    const links: Array<NavLinks> = [
        {
            icon: 'home',
            path: '/',
            name: 'Home',
        },
        {
            icon: 'persons',
            path: '/users',
            name: 'Users',
        },
        {
            icon: 'settings',
            path: '/settings',
            name: 'Settings',
            dropdownMenus: [
                {
                    path: '/roles',
                    name: 'Roles',
                },
                {
                    path: '/account',
                    name: 'Account',
                },
            ],
        }
    ]

    const navItems: JSX.Element[] = []

    links.forEach((link, index) => {
        navItems.push(
            <NavItem
                key={index}
                path={link.path}
                isActive={isActive(link.path)}
                dropdownMenus={link.dropdownMenus}
            >{link.name}</NavItem>
        )
    })

    return (
        <ul className="navbar-nav">
            {navItems}
        </ul>
    )
}

export default NavList