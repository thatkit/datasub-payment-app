// Components
import { CardNumber } from './components/CardNumber';
import { ExpDate } from './components/ExpDate';
import { Cvv } from './components/Cvv';
import { Amount } from './components/Amount';
// Styles
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const App = () => {
  return (
    <Container className={styles.container}>
      <Form inline>

        <Row>
          <Col>
            <CardNumber />
          </Col>
        </Row>

        <Row className={styles.dateAndCvvRow}>
          <ExpDate />
          <Col xs="0" sm="3"></Col>
          <Col xs="6" sm="3">
            <Cvv />
          </Col>
        </Row>

        <br/>

        <Row>
          <Col xs="12" sm="6">
            <Amount />
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