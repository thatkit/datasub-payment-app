// Styles
import {
    Col,
    Button
} from 'reactstrap';
import styles from './SubmitButton.module.css';

export const SubmitButton = () => {
    return (
        <Col xs="12" sm="6" className="mb-3">
            <Button className={styles.submitBtn}>
                Pay
            </Button>
        </Col>
    )
}