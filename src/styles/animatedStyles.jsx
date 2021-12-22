import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import {
  MainPageLeft,
  SubPageRight,
  MainPageRight,
  SubPageLeft,
} from "./authenticationPageStyles";
import { ProfileInfo } from "./profilePageStyles";
import { LightButton, Button, WholePage } from "./globalStyles";
import { keyframes } from "styled-components";
import styled from "styled-components/macro";

export const AnimatedLightButton = (label) => {
  return (
    <LightButton
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {label}
    </LightButton>
  );
};

export const AnimatedButton = (label) => {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {label}
    </Button>
  );
};

export const AnimatedSubmitButton = (label, loading) => {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="submit"
      disabled={loading}
    >
      {label}
    </Button>
  );
};

export const AnimatedSubPageRight = (children) => {
  return (
    <SubPageRight
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </SubPageRight>
  );
};

export const AnimatedMainPageLeft = (children) => {
  return (
    <MainPageLeft
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    >
      {children}
    </MainPageLeft>
  );
};

export const AnimatedMainPageRight = (children) => {
  return (
    <MainPageRight
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    >
      {children}
    </MainPageRight>
  );
};

export const AnimatedSubPageLeft = (children) => {
  return (
    <SubPageLeft
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </SubPageLeft>
  );
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    x: "-200vh",
    transition: { ease: "easeIn", duration: 0.7 },
  },
};

export const AnimatedSelectionButton = (label, selection) => {
  return (
    <SelectedLightButton
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => selection(label)}
    >
      {label}
    </SelectedLightButton>
  );
};
