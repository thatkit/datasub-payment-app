import {
    Col,
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

export const Cvv = ({ disabled }) => {
    const handleOnChange = ({ target }) => setCvv(target.value);

    // Internal state setup
    const [cvv, setCvv] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [errMes, setErrMes] = useState('');

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addCvv(cvv));
        !isValid && dispatch(addCvv(''));
    }, [dispatch, cvv, isValid]);

    // validation
    useEffect(() => {
        if (cvv === '') return setIsInvalid(false);
        if (isStringLength(cvv, 3)[0] && isNumber(cvv)[0]) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);

        // set error message
        !isStringLength(cvv, 3)[0] && setErrMes(isStringLength(cvv, 3)[1]);
        !isNumber(cvv)[0] && setErrMes(isNumber(cvv)[1]);        
    }, [cvv]);

    return (
        <Col xs="6" sm="3">
            <FormGroup floating>
                <Input 
                    id="cvv"
                    name="cvv"
                    placeholder="CVV"
                    type="password"
                    inputMode="numeric"
                    maxLength="3"
                    autoComplete="cc-csc"
                    onChange={handleOnChange}
                    invalid={isInvalid}
                    valid={isValid}
                    disabled={disabled}
                />
                <Label for="cvv">
                    CVV
                </Label>
                <FormFeedback tooltip>
                    {errMes}
                </FormFeedback>
            </FormGroup>
        </Col>
    )
}