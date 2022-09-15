import React, {useContext} from "react";
import AppContext from "../../context/AppContext";
import {Container, PaymentItem, Item, PaymentElement,H4} from './styles'
import { PayPalButton } from "react-paypal-button-v2"
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const {state , addNewOrder} = useContext(AppContext)
  const {cart, buyer} = state
  const navigate = useNavigate()

  const paypalOptions = {
    clientId : 'AbIH3wd8CLtEIPR64g3PJWjQLl_D2_ig9b6S7KxkZCgUTMtJ9Q8DDCbKqFMwJpRZRnWtOl9PjCnfKGSh',
    intent: 'capture',
    currency: 'USD'

  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'RECT'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section>
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item) => (
            <PaymentItem key={item.title}>
              <PaymentElement>
                <H4>{item.title} </H4>
                <span>
                  ${item.price}
                </span>
              </PaymentElement>
            </PaymentItem>
          ))
        }
        <div>
          <PayPalButton
           paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onPaymentStart={() => console.log('start pay')}
          onSuccess={data => handlePaymentSuccess(data)}
          onError={error => console.log(error)}
          
          />
        </div>
      </section>
    </Container>
  );
};

export default Payment;
