export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="text-text-muted mt-2">Replace the action URL with your Formspree/EmailJS endpoint.</p>
      <form method="POST" action="https://formspree.io/f/your-id" className="mt-6 grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Your name" className="bg-bg-secondary border border-slate-700 rounded p-3" required />
        <input name="_replyto" placeholder="Your email" type="email" className="bg-bg-secondary border border-slate-700 rounded p-3" required />
        <textarea name="message" placeholder="Your message" className="bg-bg-secondary border border-slate-700 rounded p-3 sm:col-span-2" rows={5} required />
        <button className="bg-accent-cyan text-bg-primary font-semibold rounded p-3 sm:col-span-2 hover:opacity-90">Send</button>
      </form>
    </section>
  )
}
