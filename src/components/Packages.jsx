import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { packages } from "../data/cateringData";

export default function Packages({ onBookPackage }) {
  return (
    <section id="packages" className="bg-[#eeefe5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><span className="font-semibold uppercase tracking-[4px] text-orange-600">Event Packages</span><h2 className="mt-4 font-display text-4xl font-bold text-stone-900 sm:text-5xl">Choose Your Feast</h2></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg,index) => <motion.div key={pkg.name} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.1}} className={`premium-card relative rounded-xl border p-8 ${pkg.popular ? "premium-featured text-white lg:-translate-y-3" : ""}`}>
            {pkg.popular && <div className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-700">POPULAR</div>}
            <h3 className={`font-display text-2xl font-bold ${pkg.popular ? "text-white" : "text-stone-900"}`}>{pkg.name}</h3>
            <p className={`mt-3 text-sm ${pkg.popular ? "text-orange-100" : "text-stone-500"}`}>{pkg.description}</p>
            <div className="mt-7"><span className="font-display text-5xl font-bold">{pkg.price}</span><span className="ml-2 text-sm opacity-70">{pkg.unit}</span></div>
            <div className="my-7 h-px bg-current opacity-10"/>
            <div className="space-y-3">{pkg.items.map(item => <div key={item} className="flex items-center gap-3"><Check size={18} className={pkg.popular ? "text-orange-200" : "text-orange-600"}/><span className="text-sm">{item}</span></div>)}</div>
            <a href="#contact" onClick={() => onBookPackage(pkg)} className={`button-premium mt-8 block rounded-lg px-6 py-3 text-center text-sm font-bold ${pkg.popular ? "button-light" : ""}`}>Book This Package</a>
          </motion.div>)}
        </div>
      </div>
    </section>
  );
}