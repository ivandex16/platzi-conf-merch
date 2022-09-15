import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const Container = styled(motion.main)`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;
`;

export const InformationButtons = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0;
`;

export const InformationElements = styled(motion.article)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #204D39;
`;

export const InformationSidebar = styled(motion.div)`
  margin: 10px 0 0 0;
`;

export const Back = styled(motion.div)`
  margin: 10px 0 0 0;
`;

export const InformationItem = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #204D39;
`;

export const H4 = styled(motion.h4)`
  margin: 0;
`;

export const H2 = styled(motion.h2)`
  margin: 0 0 8px 0;
  padding: 0;
`;

export const H3 = styled(motion.h3)`
  font-size: 18px;
  margin: 0 0 8px 0;
  padding: 0;
`;

export const Input = styled(motion.input)`
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.75);
  display: inline-block;
  font-feature-settings: "tnum";
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0 0 8px 0;
  outline: 0;
  padding: 4px 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled(motion.button)`
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
color: #F55353;

`