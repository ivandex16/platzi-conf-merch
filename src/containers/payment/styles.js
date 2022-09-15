import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

export const PaymentItem = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
  


export const Item = styled(motion.button)`

margin: 0 0 0 10px;
color: rgba(0,0,0,0.4);
cursor: pointer;


`
export const Button = styled(motion.button)`
    background-color: transparent;
    border: none;
    outline: none;
  `


  export const PaymentElement = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  
  `
  
  export const H4= styled(motion.h4)`
  margin: 0
  
  `
  
