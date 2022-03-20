// Styles
import {
    Col,
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
import styles from './Amount.module.css';
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & action dispatchers
import { useDispatch } from 'react-redux';
import { addAmount } from '../redux/apiSlice';
// Helpers
import { isTwoDigitsAfterDecimalPoint } from '../helpers/validation';

export const Amount = ({ disabled }) => {
    const handleOnChange = ({ target }) => setAmount(Number(target.value));

    // Internal state setup
    const [amount, setAmount] = useState(0);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [errMes, setErrMes] = useState('');

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addAmount(amount));
        !isValid && dispatch(addAmount(0));
    }, [dispatch, amount, isValid]);    

    // validation
    useEffect(() => {
        if (amount === 0) return setIsInvalid(false);
        if ((amount > 0) && isTwoDigitsAfterDecimalPoint(amount)[0]) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);

        // set error message
        amount <= 0 && setErrMes('Please, insert a positive decimal');
        !isTwoDigitsAfterDecimalPoint(amount)[0] && setErrMes(isTwoDigitsAfterDecimalPoint(amount)[1]);        
    }, [amount]);

    return (
        <Col xs="12" sm="6">
            <FormGroup floating>
                <Input
                    className={styles.amountInput}
                    id="amount"
                    name="amount"
                    placeholder="Amount"
                    type="number"
                    inputMode="decimal"
                    autoComplete="transaction-amount"
                    onChange={handleOnChange}
                    invalid={isInvalid}
                    valid={isValid}
                    disabled={disabled}
                />
                <Label for="amount">
                    Amount
                </Label>
                <FormFeedback tooltip>
                    {errMes}
                </FormFeedback>
            </FormGroup>
        </Col>
    )
}