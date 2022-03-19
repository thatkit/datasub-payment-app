// Styles
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
import { addCardNumber } from '../redux/apiSlice';
// Helpers
import { isStringLength, isNumber } from '../helpers/validation';

export const CardNumber = () => {
    const handleOnChange = ({ target }) => setCardNumber(target.value);
    
    // Internal state setup
    const [cardNumber, setCardNumber] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addCardNumber(cardNumber));
    }, [dispatch, cardNumber, isValid]);    

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