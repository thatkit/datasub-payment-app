// Styles
import { Col, Button } from 'reactstrap';
import styles from './SubmitButton.module.css';
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & action dispatchers
import { useSelector } from 'react-redux';
import { useSubmitPaymentMutation } from '../redux/apiService';

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
    const [isValid, setIsValid] = useState('invalid'); // #

    // Redux state setup
    const apiSlice = useSelector(({ apiSlice }) => apiSlice);
    useEffect(() => {
        const areAllValid = Object.values(apiSlice).every(value => Boolean(value));
        areAllValid ? setIsValid('valid') : setIsValid('invalid');
    }, [apiSlice]);

    // RTK Mutation
    const [submitPayment, result] = useSubmitPaymentMutation();
    const handleOnClick = () => submitPayment(apiSlice);
    useEffect(() => console.log(result), [result]);
    
    return (
        <Col xs="12" sm="6" className="mb-3">
            <Button
                className={buttonProps['valid'].classNames}
                color={buttonProps['valid'].color}
                active={buttonProps['valid'].active}
                disabled={!buttonProps['valid'].active}
                onClick={handleOnClick}
            >
                Submit payment
            </Button>
        </Col>
    )
}