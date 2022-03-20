// Styles
import { Col, Button } from 'reactstrap';
import styles from './SubmitButton.module.css';
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & mutation dispatcher
import { useSelector } from 'react-redux';
import { useSubmitPaymentMutation } from '../redux/apiService';

export const SubmitButton = ({ disabled, handleOnClick }) => {
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
    const inputValues = useSelector(({ apiSlice }) => apiSlice);
    useEffect(() => {
        const areAllValid = Object.values(inputValues).every(value => Boolean(value));
        areAllValid ? setIsValid('valid') : setIsValid('invalid');
    }, [inputValues]);
    
    return (
        <Col xs="12" sm="6" className="mb-3">
            <Button
                className={buttonProps[isValid].classNames}
                color={buttonProps[isValid].color}
                active={buttonProps[isValid].active}
                onClick={handleOnClick}
                disabled={!buttonProps[isValid].active || disabled}
            >
                Submit payment
            </Button>
        </Col>
    )
}