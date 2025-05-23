import React from "react";
import { motion } from "framer-motion";
import { SentMail } from "../Svgs";

const ease = [0.34, 1.56, 0.64, 1];
const variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    ease,
    transition: {
      delay: 0.2,
    },
  },
};

const Success = () => (
  <div className="contact__sent">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="contact__svg"
    >
      <h2>The message was sent.</h2>
      <SentMail />
      <h2>Thank you!</h2>
    </motion.div>
  </div>
);

export default Success;
