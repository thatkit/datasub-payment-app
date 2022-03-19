import {
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
// Hooks
import { useState, useEffect } from 'react';
// Helpers
import { isTwoDigitsAfterDecimalPoint } from '../helpers/validation';

export const Amount = () => {
    const [amount, setAmount] = useState(0);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleOnChange = ({ target }) => setAmount(Number(target.value));

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