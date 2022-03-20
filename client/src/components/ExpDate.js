// Styles
import {
    Col,
    FormGroup,
    Input,
    Label,
    FormFeedback
} from 'reactstrap';
import styles from './ExpDate.module.css';
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & action dispatchers
import { useDispatch } from 'react-redux';
import { addExpDate } from '../redux/apiSlice';
// Helpers
import { isCorrectMMYYYFormat, isNotExpired } from '../helpers/validation';

export const ExpDate = ({ disabled }) => {
    const handleOnChangeMM = ({ target }) => setExpDateMM(target.value);
    const handleOnChangeYYYY = ({ target }) => setExpDateYYYY(target.value);
    
    // Internal state setup
    const [expDate, setExpDate] = useState('');
    const [expDateMM, setExpDateMM] = useState('');
    const [expDateYYYY, setExpDateYYYY] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Redux state setup
    const dispatch = useDispatch();
    useEffect(() => {
        isValid && dispatch(addExpDate(expDate));
        !isValid && dispatch(addExpDate(''));
    }, [dispatch, expDate, isValid]);    

    // turning into a single string
    useEffect(() => {
        expDateMM.length === 1 && setExpDateMM('0' + expDateMM);
        setExpDate(expDateMM + '/' + expDateYYYY);
    }, [expDateMM, expDateYYYY, expDate]);

    // validation
    useEffect(() => {
        if (expDate === '' || expDate === '/') return setIsInvalid(false);
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
                <FormGroup floating className={styles.mm}>
                    <Input
                        id="expDateMM"
                        name="expDateMM"
                        placeholder="MM"
                        type="text"
                        inputMode="numeric"
                        maxLength="2"
                        autoComplete="cc-exp-month"
                        onChange={handleOnChangeMM}
                        invalid={isInvalid}
                        valid={isValid}
                        disabled={disabled}
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
                        inputMode="numeric"
                        maxLength="4"
                        autoComplete="cc-exp-year"
                        onChange={handleOnChangeYYYY}
                        invalid={isInvalid}
                        valid={isValid}
                        disabled={disabled}
                    />
                    <Label for="expDateYYYY">
                        YYYY
                    </Label>
                </FormGroup>
            </Col>
        </>
    )
}