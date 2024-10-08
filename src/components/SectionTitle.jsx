/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SectionTitle.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = ({ title }) => (
  <LazyMotion features={domAnimation} strict>
    <m.div
      initial={{ x: -350 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="text-primary-400 p-6 noselect"
    >
      <span className="bounce">{title}</span>
    </m.div>
  </LazyMotion>
)

export default SectionTitle;
