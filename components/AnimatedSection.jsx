import { motion } from "framer-motion"

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  duration = 0.6,
  once = true,
  className = ""
}) {
  // Define directions
  const variants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    none: { opacity: 0 }
  }

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  )
}
