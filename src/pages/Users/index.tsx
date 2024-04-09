import SpinnerOverlay from '@/components/SpinnerOverlay'
import User from '@/types/User'
import UserService from '@/services/UserService'
import { useEffect, useState } from 'react'

const UserIndex = () => {
    const [users, setUsers] = useState(Array<User>)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        UserService.index().then(({ data: { data } }) => {
            setUsers(data)
        })
            .finally(() => setIsFetching(false))
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <ol>
                    {users.map((user: User) => (
                        <li key={user.id}>
                            {user.name} - {user.email} {/* Render whatever user information you want */}
                        </li>
                    ))}
                </ol>
            </div>
            <SpinnerOverlay isShowing={isFetching} />
        </div>
    )
}

export default UserIndex