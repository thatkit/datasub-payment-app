// Components
import { LoadingSpinner } from './LoadingSpinner';
// Styles
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import styles from './ResponseStatus.module.css';
// React Hooks
import { useState, useEffect } from 'react';
  
export const ResponseStatus = ({ status }) => {
    // Internal state
    const [isOpen, setIsOpen] = useState(status.display);

    useEffect(() => {
        setIsOpen(status.display);
    }, [status]);

    return (
        <Modal
            centered
            toggle={() => setIsOpen(false)}
            isOpen={isOpen}
        >
            <ModalHeader className={styles.centered}>
                {status.title}
            </ModalHeader>
            <ModalBody className={styles.centered}>
                {status.message === 'spinner'
                    ? <LoadingSpinner />
                    : status.message}
            </ModalBody>
        </Modal>        
    )
}