import {
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
// Hooks
import { useState, useEffect } from 'react';

export const Cvv = () => {
    const [cvv, setCvv] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleOnChange = ({ target }) => setCvv(target.value);

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