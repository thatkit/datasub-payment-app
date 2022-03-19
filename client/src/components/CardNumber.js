// Styles
import {
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
// Hooks
import { useState, useEffect } from 'react';
// Helpers
import { isStringLength, isNumber } from '../helpers/validation';

export const CardNumber = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleOnChange = ({ target }) => setCardNumber(target.value);

    // validation
    useEffect(() => {
        if (cardNumber === '') return setIsInvalid(false);
        if (isStringLength(cardNumber, 16) && isNumber(cardNumber)) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);
    }, [cardNumber]);

    return (
        <FormGroup floating>
            <Input 
                id="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                type="text"
                autoComplete="cc-number"
                onChange={handleOnChange}
                invalid={isInvalid}
                valid={isValid}
            />
            <Label for="cardNumber">
                Card Number
            </Label>
            <FormFeedback tooltip>
                Invalid
            </FormFeedback>
        </FormGroup>
    )
}