import {
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export const Cvv = () => {
    return (
        <FormGroup floating>
            <Input 
                id="cvv"
                name="cvv"
                placeholder="CVV"
                type="text"
                autoComplete="cc-csc"
            />
            <Label for="cvv">
                CVV
            </Label>
        </FormGroup>
    )
}