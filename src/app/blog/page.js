"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="box">
      <motion.div
        className="bg-black w-20 h-20"
        animate={{ opacity: 0 }}
      ></motion.div>
    </div>
  );
}
