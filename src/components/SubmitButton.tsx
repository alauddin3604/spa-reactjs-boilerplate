const Spinning = ({ isLoading = false }: { isLoading: boolean }) => {
    if (isLoading) {
        return (
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        )
    }
}

interface SubmitButtonProps {
    isLoading: boolean
    type?: 'submit' | 'button'
    text?: string
}

const SubmitButton = ({ isLoading = false, type = 'submit', text = 'Submit' }: SubmitButtonProps) => {
    const buttonClassName = `btn btn-primary ${isLoading ? 'disabled' : ''}`

    return (
        <button type={type} className={buttonClassName}>
            <Spinning isLoading={isLoading} />
            {text}
        </button>
    )
}

export default SubmitButton