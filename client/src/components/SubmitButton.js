// Styles
import {
    Col,
    Button
} from 'reactstrap';
import styles from './SubmitButton.module.css';
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & action dispatchers
import { useSelector } from 'react-redux';

export const SubmitButton = () => {
    // button props
    const buttonProps = {
        valid: {
            classNames: styles.submitBtn,
            color: 'dark',
            active: true
        },
        invalid: {
            classNames: styles.submitBtn + ' ' + styles.invalid,
            color: 'light',
            active: false
        }
    }

    // Internal state setup
    const [isValid, setIsValid] = useState('invalid');
    
    // Redux state setup
    const apiSlice = useSelector(({ apiSlice }) => apiSlice);
    useEffect(() => {
        const areAllValid = Object.values(apiSlice).every(value => Boolean(value));
        areAllValid ? setIsValid('valid') : setIsValid('invalid');
    }, [apiSlice]);
    
    return (
        <Col xs="12" sm="6" className="mb-3">
            <Button
                className={buttonProps[isValid].classNames}
                color={buttonProps[isValid].color}
                active={buttonProps[isValid].active}
                disabled={!buttonProps[isValid].active}
            >
                Submit payment
            </Button>
        </Col>
    )
}