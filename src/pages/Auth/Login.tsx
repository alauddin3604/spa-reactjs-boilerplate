import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { FormEvent, useState } from 'react'
import AuthService from '@/services/AuthService'
import { NavLink, useNavigate } from 'react-router-dom'
import SubmitButton from '@/components/SubmitButton'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoggingIn, setLoggingIn] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoggingIn(true)

        try {
            await AuthService.getCsrfCookie()
            await AuthService.login({
                email,
                password
            })
            navigate('/')
        } catch (error) {
            console.error(error)
        }

        setLoggingIn(false)
    }

    return (
        <form onSubmit={login}>
            <div className="d-flex justify-content-center">
                <h1>Login</h1>
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />
                <div className="invalid-feedback"></div>
            </div>
            <div className="input-group input-group-flat mb-3">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <span className="input-group-text cursor-pointer" onClick={togglePasswordVisibility}>
                    <a className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                        {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                    </a>
                </span>
                <div className="invalid-feedback"></div>
            </div>
            <div className="d-grid gap-2 mb-3">
                <SubmitButton isLoading={isLoggingIn} text="Log In" />
            </div>
            <div className="text-end">
                <NavLink to="/auth/forgot-password">Forgot password?</NavLink>
            </div>
        </form>
    )
}

export default Login