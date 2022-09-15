import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductsItems = styled(motion.div)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

export const ProductsItem = styled(motion.div)`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  position: relative;
`;

export const ProductItemInfo = styled(motion.div)`
  padding: 10px;
`;

export const H2 = styled(motion.h2)`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const Span = styled(motion.span)`
  color: #33b13a;
`;

export const P = styled(motion.p)`
  font-size: 14px;
  font-weight: 300;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0 0;
  object-fit: contain;
`;

export const Button = styled(motion.button)`
  background: linear-gradient(to bottom, #222E2E 5%, #204D39 100%);
 color: white;
  width: 100%;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  border: 0px;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  &:hover {
    background-color: rgba(39, 44, 49, 0.06);
  }
`;
