import {
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export const Amount = () => {
    return (
        <FormGroup floating>
            <Input 
                id="amount"
                name="amount"
                placeholder="Amount"
                type="number"
                autoComplete="transaction-amount"
            />
            <Label for="amount">
                Amount
            </Label>
        </FormGroup>
    )
}