import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function Booking({ selectedPackage }) {
  const [submitted,setSubmitted] = useState(false);
  useEffect(() => setSubmitted(false), [selectedPackage]);
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="bg-[#f5f4eb] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="font-semibold uppercase tracking-[4px] text-orange-600">Let's Celebrate</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-stone-900 sm:text-5xl">Plan Your Perfect<span className="text-orange-600"> Feast</span></h2>
          <p className="mt-5 leading-7 text-stone-600">Tell us about your event and our catering team will contact you with menu options and pricing.</p>
          <div className="mt-9 space-y-5">
            <div className="flex items-center gap-4"><div className="rounded-xl bg-orange-100 p-3 text-orange-700"><Phone size={20}/></div><div><div className="text-xs text-stone-500">Call Us</div><div className="font-bold">+91 98765 43210</div></div></div>
            <div className="flex items-center gap-4"><div className="rounded-xl bg-orange-100 p-3 text-orange-700"><Mail size={20}/></div><div><div className="text-xs text-stone-500">Email</div><div className="font-bold">hello@thamizhvirundhu.in</div></div></div>
            <div className="flex items-center gap-4"><div className="rounded-xl bg-orange-100 p-3 text-orange-700"><MapPin size={20}/></div><div><div className="text-xs text-stone-500">Service Area</div><div className="font-bold">Tamil Nadu • Chennai • Madurai • Coimbatore</div></div></div>
          </div>
        </div>
        <motion.form onSubmit={handleSubmit} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="premium-card rounded-xl border p-6 sm:p-8">
          {selectedPackage && <div className="mb-6 border-b border-stone-200 pb-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2"><div><p className="text-xs font-semibold uppercase text-orange-700">Selected Package</p><h3 className="mt-1 font-display text-xl font-bold text-stone-900">{selectedPackage.name}</h3></div><p className="font-bold text-stone-900">{selectedPackage.price} <span className="text-sm font-normal text-stone-500">{selectedPackage.unit}</span></p></div>
            <p className="mt-2 text-sm text-stone-600">{selectedPackage.description}</p>
            <p className="mt-2 text-xs leading-5 text-stone-500">Includes: {selectedPackage.items.join(" · ")}</p>
          </div>}
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label className="mb-2 block text-sm font-semibold">Your Name</label><input required type="text" placeholder="Enter your name" className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"/></div>
            <div><label className="mb-2 block text-sm font-semibold">Phone Number</label><input required type="tel" placeholder="+91" className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"/></div>
            <div><label className="mb-2 block text-sm font-semibold">Event Type</label><select className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none focus:border-orange-500"><option>Wedding</option><option>Engagement</option><option>Birthday</option><option>Corporate</option><option>House Function</option><option>Temple Event</option></select></div>
            <div><label className="mb-2 block text-sm font-semibold">Event Date</label><div className="relative"><CalendarDays size={18} className="absolute left-3 top-3.5 text-stone-400"/><input required type="date" className="w-full rounded-xl border border-stone-200 px-10 py-3 outline-none focus:border-orange-500"/></div></div>
            <div><label className="mb-2 block text-sm font-semibold">Guest Count</label><input required type="number" min="1" placeholder="Number of guests" className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500"/></div>
            <div><label className="mb-2 block text-sm font-semibold">City</label><input required type="text" placeholder="Chennai / Madurai / Coimbatore..." className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500"/></div>
            <div className="sm:col-span-2"><label className="mb-2 block text-sm font-semibold">Additional Requirements</label><textarea rows="4" placeholder="Tell us about your menu preferences..." className="w-full resize-none rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500"/></div>
          </div>
          {submitted && <p role="status" className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">{selectedPackage ? `Your request for the ${selectedPackage.name} package has been received. Our team will contact you soon.` : "Your booking request has been received. Our team will contact you soon."}</p>}
          <button type="submit" className="button-premium mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-bold">
            {submitted ? <><CheckCircle2 size={20}/>Request Received</> : "Request Catering Quote"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}