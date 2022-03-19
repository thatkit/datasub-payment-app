import {
    Col,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export const ExpDate = () => {
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
                    />
                    <Label for="expDateMM">
                        MM
                    </Label>
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
                    />
                    <Label for="expDateYYYY">
                        YYYY
                    </Label>
                </FormGroup>
            </Col>
        </>
    )
}