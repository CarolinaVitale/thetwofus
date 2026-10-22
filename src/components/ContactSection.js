import { useState } from "react";
export default function ContactSection() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <section id="contact" className="contact">
      <div>
      <p className="eyebrow">GOOD THINGS AHEAD</p>
      <h2>Let’s keep<br />in the loop.</h2>
      <p>New collections. Fresh colors. Little reasons to smile.</p>
      </div>
      <div className="contact-action">
      <button id="hello" onClick={() => setContactOpen(true)} className="button light">Say hello <span>↗</span>
      </button>
      <p id="contact-note" className={contactOpen ? 'contact-note active' : 'contact-note'} role="status">{contactOpen ? "We'd love to hear from you! Our contact channels are coming soon. This demo doesn't send messages." : 'Our contact details are coming soon. This is a first look at our little world.'}</p>
      </div>
      </section>
  );
}
