import BaseTable from '@/components/BaseTable'
import SpinnerOverlay from '@/components/SpinnerOverlay'
import UserService from '@/services/UserService'
import User from '@/types/User'
import { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

const UserIndex = () => {
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState(Array<User>)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        UserService.index({}).then(({ data: { data } }) => {
            setUsers(data)
        })
            .finally(() => setIsFetching(false))
    }, [])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <Card>
            <Card.Header>
                <h3 className="card-title">Users</h3>
            </Card.Header>
            <Card.Body>
                <div className="d-flex mb-3">
                    <div className="ms-auto">
                        <Button variant="primary" onClick={openModal}>Add New User</Button>
                    </div>
                </div>
                <BaseTable data={users} />
            </Card.Body>
            <SpinnerOverlay isShowing={isFetching} />
            <Modal centered={true} show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    )
}

export default UserIndex