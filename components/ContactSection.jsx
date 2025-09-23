import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <AnimatedSection direction="up">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      </AnimatedSection>

      {/* Description */}
      <AnimatedSection direction="up" delay={0.1}>
        <p className="text-text-muted mt-2">
          Replace the action URL with your Formspree/EmailJS endpoint.
        </p>
      </AnimatedSection>

      {/* Form */}
      <form
        method="POST"
        action="https://formspree.io/f/xeorqrqn"
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        <AnimatedSection direction="left" delay={0.2}>
          <input
            name="name"
            placeholder="Your name"
            className="bg-bg-secondary border border-slate-700 rounded p-3 w-full"
            required
          />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.3}>
          <input
            name="_replyto"
            placeholder="Your email"
            type="email"
            className="bg-bg-secondary border border-slate-700 rounded p-3 w-full"
            required
          />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <textarea
            name="message"
            placeholder="Your message"
            className="bg-bg-secondary border border-slate-700 rounded p-3 sm:col-span-2"
            rows={5}
            required
          />
        </AnimatedSection>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-accent-cyan text-bg-primary font-semibold rounded p-3 sm:col-span-2 hover:opacity-90"
        >
          Send
        </motion.button>
      </form>
    </section>
  )
}
