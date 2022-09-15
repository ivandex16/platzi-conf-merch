import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Container,
  CheckoutItem,
  CheckoutElement,
  Button,
  H4,
  ButtonSideBar,
  Anchor,
} from "./styles";
import { ImBin } from "react-icons/im";
import { AnimatePresence } from "framer-motion";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <Container
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div>
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}
        <AnimatePresence>
          {cart.map((item, index) => (
            <CheckoutItem
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckoutElement>
                <H4>{item.title}</H4>
                <span>${item.price}</span>
              </CheckoutElement>
              <Button  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} type="button" onClick={handleRemove(item)}>
                <ImBin />
              </Button>
            </CheckoutItem>
          ))}
        </AnimatePresence>
      </div>
      {cart.length > 0 && (
        <div>
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Anchor to={"/checkout/information"}>
            <ButtonSideBar whileTap={{ scale: 0.8 }} type="button">
              Continuar pedido
            </ButtonSideBar>
          </Anchor>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
