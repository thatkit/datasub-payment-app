import {
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export const CardNumber = () => {
    return (
        <FormGroup floating>
            <Input 
                id="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                type="text"
                autoComplete="cc-number"
            />
            <Label for="cardNumber">
                Card Number
            </Label>
        </FormGroup>
    )
}