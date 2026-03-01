import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection = ({ children, className = "", delay = 0 }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
