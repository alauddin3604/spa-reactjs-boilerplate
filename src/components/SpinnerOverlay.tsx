const SpinnerOverlay = ({ isShowing = false }: { isShowing: boolean }) => {
    const spinnerOverlayClass = `position-absolute spinner-overlay w-100 h-100 ${isShowing ? 'd-flex' : 'd-none'}`

    const spinnerOverlayStyle = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }

    return (
        <div className={spinnerOverlayClass} style={spinnerOverlayStyle}>
            <div className="d-flex align-self-center mx-auto">
                <div className="spinner-border"></div>
            </div>
        </div>
    )
}

export default SpinnerOverlay