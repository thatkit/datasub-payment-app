// Components
import { CardNumber } from './components/CardNumber';
import { ExpDate } from './components/ExpDate';
import { Cvv } from './components/Cvv';
import { Amount } from './components/Amount';
import { SubmitButton } from './components/SubmitButton';
// Styles
import {
  Container,
  Row,
  Col,
  Form
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const App = () => {
  return (
    <Container className={styles.container}>
      <Form inline>

        <Row>
          <CardNumber />
        </Row>
        <Row className={styles.dateAndCvvRow}>
          <ExpDate />
          <Col xs="0" sm="3"></Col>
          <Cvv />
        </Row>
        <br/>
        <Row>
          <Amount />
          <SubmitButton />
        </Row>

      </Form>
    </Container>
  );
}

export default App;