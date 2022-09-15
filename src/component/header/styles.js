import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;

`;

export const HeaderCheckout = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 30px;
  margin: 0 0 0 0.5em;
`;

export const H1 = styled(motion.h1)`


`

export const  Anchor = styled(Link)`
text-decoration: none;
color: #204D39;
` 

export const HeaderAlert = styled(motion.div)`
  color: #33b13a;
  font-size: 14px;
  margin-left: 5px;
`

export const Badge = styled(motion.div)`
    background: #f3f3f9;
    border-radius: 50%;
    position: relative;
    right: 4px;
    top: -3px;
    height: 13px;
    width: 13px;
    text-align: center;
    padding: 1px 4px;
    border: 2px solid #143f6b;
    font-size: 11px;
    font-weight: bold;

`

export const Span = styled(motion.span)`


`