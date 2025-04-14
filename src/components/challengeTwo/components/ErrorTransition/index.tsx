"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import TransactionBtn from "../TransactionBtn";
import { CreditCard, Cross, LoaderCircle, X } from "lucide-react";

const ErrorTransition = () => {
  const [startTransaction, setStartTransaction] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (startTransaction) {
      const cleanup = setTimeout(() => {
        setError(true);
      }, 3000);
      return () => clearTimeout(cleanup);
    }
  }, [startTransaction]);

  return (
    <AnimatePresence mode="wait">
      {!startTransaction && (
        <motion.div key="start" className="hover:cursor-pointer">
          <TransactionBtn
            clickHandler={() => setStartTransaction(true)}
            text="Start Transaction"
            icon={<CreditCard />}
            className="bg-slate-900 text-slate-100"
          />
        </motion.div>
      )}

      {startTransaction && !error && (
        <motion.div key="analyzing" className="hover:cursor-not-allowed">
          <TransactionBtn
            text="Analyzing transaction"
            icon={<LoaderCircle className="stroke-3 animate-spin" />}
          />
        </motion.div>
      )}

      {startTransaction && error && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, -10, 10, -6, 6, -3, 3, 0] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          key="success"
          className="hover:cursor-not-allowed"
        >
          <TransactionBtn
            text="Transaction warning"
            className="!bg-red-100 !text-red-500"
            icon={<X className="stroke-3" />}
          />
        </motion.div>
      )}

      {/* <button type="button">Transaction Safe</button>
  <button type="button">Transaction Warning</button> */}
    </AnimatePresence>
  );
};

export default ErrorTransition;
