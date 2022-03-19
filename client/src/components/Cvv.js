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
import { addCvv } from '../redux/apiSlice';
// Helpers
import { isStringLength, isNumber } from '../helpers/validation';

export const Cvv = () => {
    const handleOnChange = ({ target }) => setCvv(target.value);

    // Internal state setup
    const [cvv, setCvv] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addCvv(cvv));
    }, [dispatch, cvv, isValid]);    

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