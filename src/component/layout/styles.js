import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  padding: 10px;
  grid-template-columns: minmax(auto, 768px);
  display: grid;
  justify-content: center;
`;
