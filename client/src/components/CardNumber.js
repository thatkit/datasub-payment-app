// Styles
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
import { addCardNumber } from '../redux/apiSlice';
// Helpers
import { isStringLength, isNumber } from '../helpers/validation';

export const CardNumber = ({ disabled }) => {
    const handleOnChange = ({ target }) => setCardNumber(target.value);
    
    // Internal state setup
    const [cardNumber, setCardNumber] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [errMes, setErrMes] = useState('');

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addCardNumber(cardNumber));
        !isValid && dispatch(addCardNumber(''));
    }, [dispatch, cardNumber, isValid]);    

    // validation
    useEffect(() => {
        if (cardNumber === '') return setIsInvalid(false);
        if (isStringLength(cardNumber, 16)[0] && isNumber(cardNumber)[0]) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);

        // set error message
        !isStringLength(cardNumber, 16)[0] && setErrMes(isStringLength(cardNumber, 16)[1]);
        !isNumber(cardNumber)[0] && setErrMes(isNumber(cardNumber)[1]);
    }, [cardNumber]);

    return (
        <Col>
            <FormGroup floating>
                <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Card Number"
                    type="text"
                    inputMode="numeric"
                    maxLength="16"
                    autoComplete="cc-number"
                    onChange={handleOnChange}
                    invalid={isInvalid}
                    valid={isValid}
                    disabled={disabled}
                    autoFocus
                />
                <Label for="cardNumber">
                    Card Number
                </Label>
                <FormFeedback tooltip>
                    {errMes}
                </FormFeedback>
            </FormGroup>
        </Col>
    )
}