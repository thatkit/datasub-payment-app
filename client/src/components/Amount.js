import {
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
// Hooks
import { useState, useEffect } from 'react';

export const Amount = () => {
    const [amount, setAmount] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleOnChange = ({ target }) => setAmount(target.value);

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