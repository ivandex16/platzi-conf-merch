import React, { useContext } from "react";
import {
  Header as Encabezado,
  HeaderCheckout,
  H1,
  Anchor,
  Badge,
  Span,
} from "./styles";
import { ImCart } from "react-icons/im";
import AppContext from "../../context/AppContext";
import logo from '../../../assest/image/store.png'


const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <Encabezado>
      <H1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Anchor to={"/"}><img src={logo} alt='logo'/></Anchor>
      </H1>
      <HeaderCheckout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Span
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Anchor to={"/checkout"}>
            <ImCart />
          </Anchor>
        </Span>
        {cart.length > 0 && (
          <Badge
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]}}
          >
            {cart.length}
          </Badge>
        )}
      </HeaderCheckout>
    </Encabezado>
  );
};

export default Header;
