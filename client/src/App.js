// Components
import { CardNumber } from './components/CardNumber';
import { ExpDate } from './components/ExpDate';
import { Cvv } from './components/Cvv';
import { Amount } from './components/Amount';
import { SubmitButton } from './components/SubmitButton';
import { ResponseStatus } from './components/ResponseStatus';
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
// Helpers
import { getStatus } from './helpers/status';

const App = () => {
  // RTKQ Mutation
  const [submitPayment, result] = useSubmitPaymentMutation();

  // Status handler object
  const status = getStatus(result);

  // Redux state setup
  const inputValues = useSelector(({ apiSlice }) => apiSlice);

  // Internal state for server response
  const [response, setResponse] = useState(status.uninitialized);
  useEffect(() => setResponse(status[result.status]), [result]);

  const handleOnClick = () => submitPayment(inputValues);

  return (
    <>
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

      <ResponseStatus status={response} />
    </>
  );
}

export default App;