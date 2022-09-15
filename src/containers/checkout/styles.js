import styled from "styled-components";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

export const Container = styled(motion.main)`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  padding: 0 0 4em 0;
`;

export const CheckoutItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
`;

export const Button = styled(motion.button)`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #F55353;

`;

export const CheckoutElement = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #204D39;
`;

export const H4 = styled(motion.h4)`
  margin: 0;
`;

export const ButtonSideBar = styled(motion.button)`
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  background-color: #63b8ee;
  border-radius: 6px;
  border: 1px solid #3866a3;
  display: inline-block;
  cursor: pointer;
  color: #14396a;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #7cacde;
  width: 100%;
  display: block;
  outline: none;
`;

export const Anchor = styled(Link)`
text-decoration: none;
`