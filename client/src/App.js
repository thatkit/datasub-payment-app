import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const App = () => {
  return (
    <Container className={styles.container}>
      <Form inline>

        <Row><Col>
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
        </Col></Row>

        <Row className={styles.dateAndCvvRow}>
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
          <Col xs="0" sm="3"></Col>
          <Col xs="6" sm="3">
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
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="12" sm="6">
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
          </Col>
          <Col xs="12" sm="6" className="mb-3">
            <Button className={styles.submitBtn}>
              Pay
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;