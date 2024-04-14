import { motion } from "framer-motion";
import Box, { BoxProps } from "@mui/material/Box";
import { varWrapBoth } from "./variants/Wrap";

// interface MotionContainerProps extends BoxProps {
//   initial?: boolean | string;
//   open?: boolean;
// }
interface MotionContainerProps extends BoxProps {
  initial?: boolean | string;
  open?: boolean;
  children?: React.ReactNode; // Add this line
  sx?: { display: string; color: string };
}
export default function MotionContainer({
  open,
  children,
  ...other
}: MotionContainerProps) {
  return (
    <Box
      initial={false}
      variants={varWrapBoth}
      component={motion.div}
      animate={open ? "animate" : "exit"}
      {...other}
    >
      {children}
    </Box>
  );
}