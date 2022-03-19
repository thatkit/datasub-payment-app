// Styles
import {
    Col,
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
// Hooks
import { useState, useEffect } from 'react';
// Helpers
import { isCorrectMMYYYFormat, isNotExpired } from '../helpers/validation';

export const ExpDate = () => {
    const [expDate, setExpDate] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleOnChange = ({ target }) => setExpDate(target.value);

    // validation
    useEffect(() => {
        if (expDate === '') return setIsInvalid(false);
        if (isCorrectMMYYYFormat(expDate) && isNotExpired(expDate)) {
            setIsInvalid(false);
            setIsValid(true);
            return null;
        }
        setIsInvalid(true);
        setIsValid(false);
    }, [expDate]);
    
    return (
        <>
            <Col xs="6" sm="3">
                <FormGroup floating>
                    <Input 
                        id="expDateMM"
                        name="expDateMM"
                        placeholder="MM"
                        type="text"
                        autoComplete="cc-exp-month"
                        invalid={isInvalid}
                        valid={isValid}                        
                    />
                    <Label for="expDateMM">
                        MM
                    </Label>
                    <FormFeedback tooltip>
                        Invalid
                    </FormFeedback>                    
                </FormGroup>
            </Col>
            <Col xs="6" sm="3">
                <FormGroup floating>
                    <Input 
                        id="expDateYYYY"
                        name="expDateYYYY"
                        placeholder="YYYY"
                        type="text"
                        autoComplete="cc-exp-year"
                        invalid={isInvalid}
                        valid={isValid}
                    />
                    <Label for="expDateYYYY">
                        YYYY
                    </Label>
                </FormGroup>
            </Col>
        </>
    )
}