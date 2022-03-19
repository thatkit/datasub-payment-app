import {
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & action dispatchers
import { useDispatch } from 'react-redux';
import { addAmount } from '../redux/apiSlice';
// Helpers
import { isTwoDigitsAfterDecimalPoint } from '../helpers/validation';

export const Amount = () => {
    const handleOnChange = ({ target }) => setAmount(Number(target.value));

    // Internal state setup
    const [amount, setAmount] = useState(0);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addAmount(amount));
        !isValid && dispatch(addAmount(0));
    }, [dispatch, amount, isValid]);    

    // validation
    useEffect(() => {
        if (amount === 0) return setIsInvalid(false);
        if ((amount > 0) && isTwoDigitsAfterDecimalPoint(amount)) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);
    }, [amount]);

    return (
        <FormGroup floating>
            <Input 
                id="amount"
                name="amount"
                placeholder="Amount"
                type="number"
                autoComplete="transaction-amount"
                onChange={handleOnChange}
                invalid={isInvalid}
                valid={isValid}                
            />
            <Label for="amount">
                Amount
            </Label>
            <FormFeedback tooltip>
                Invalid
            </FormFeedback>
        </FormGroup>
    )
}