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

export const Cvv = () => {
    const [cvv, setCvv] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleOnChange = ({ target }) => setCvv(target.value);

    // validation
    useEffect(() => {
        if (cvv === '') return setIsInvalid(false);
        if (isStringLength(cvv, 3) && isNumber(cvv)) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);
    }, [cvv]);

    return (
        <FormGroup floating>
            <Input 
                id="cvv"
                name="cvv"
                placeholder="CVV"
                type="text"
                autoComplete="cc-csc"
                onChange={handleOnChange}
                invalid={isInvalid}
                valid={isValid}                
            />
            <Label for="cvv">
                CVV
            </Label>
            <FormFeedback tooltip>
                Invalid
            </FormFeedback>
        </FormGroup>
    )
}