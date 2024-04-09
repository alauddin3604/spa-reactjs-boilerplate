import SubmitButton from '@/components/SubmitButton'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <form >
            <div className="d-flex justify-content-center">
                <h1>Forgot Password</h1>
            </div>
            <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="example@mail.com" />
            </div>
            <div className="d-grid gap-2 mb-3">
                <SubmitButton type="button" isLoading={false} text="Send Verification Code" />
            </div>
            <div className="text-start">
                <NavLink to="/auth/login">Back to Login</NavLink>
            </div>
        </form>
    )
}

export default ForgotPassword