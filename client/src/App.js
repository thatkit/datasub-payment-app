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
// React Hooks
import { useState, useEffect } from 'react';
// Redux Hooks & mutation dispatcher
import { useSelector } from 'react-redux';
import { useSubmitPaymentMutation } from './redux/apiService';

const App = () => {
  // Status handler object
  const status = {
    uninitialized: {
      display: false,
      disabled: false,
      color: 'secondary',
      title: 'Processing the payment.'
    },
    pending: {
      display: true,
      disabled: true,
      color: 'secondary',
      title: 'Processing the payment.'
    },
    fulfilled: {
      display: true,
      disabled: false,
      color: 'success',
      title: 'Payment successful.',
      message: () => result.data || ''
    },
    rejected: {
      display: true,
      disabled: false,
      color: 'warning',
      title: 'Payment failure.',
      message: () => result.error.data.err.message || ''
    }
  }

  // Internal state for server response
  const [response, setResponse] = useState(status.uninitialized);

  // Redux state setup
  const inputValues = useSelector(({ apiSlice }) => apiSlice);

  // RTKQ Mutation
  const [submitPayment, result] = useSubmitPaymentMutation();
  const handleOnClick = () => submitPayment(inputValues);
  useEffect(() => setResponse(status[result.status]), [result]);

  return (
    <Container className={styles.container}>
      <Form inline>

        <Row>
          <CardNumber disabled={response.disabled} />
        </Row>
        <Row className={styles.dateAndCvvRow}>
          <ExpDate disabled={response.disabled} />
          <Col xs="0" sm="3"></Col>
          <Cvv disabled={response.disabled} />
        </Row>
        <br/>
        <Row>
          <Amount disabled={response.disabled} />
          <SubmitButton
            disabled={response.disabled}
            handleOnClick={handleOnClick}
          />
        </Row>

      </Form>
    </Container>
  );
}

export default App;