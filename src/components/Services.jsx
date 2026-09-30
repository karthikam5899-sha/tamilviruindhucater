import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/cateringData";

export default function Services() {
  return (
    <section id="services" className="bg-stone-950 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl"><span className="font-semibold uppercase tracking-[4px] text-orange-400">What We Do</span><h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">Catering For Every<span className="text-orange-400"> Celebration</span></h2><p className="mt-5 leading-7 text-stone-400">From traditional ceremonies to modern celebrations, our catering team creates menus that match your occasion.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service,index) => <motion.div key={service.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} whileHover={{y:-8}} className="premium-card-dark group rounded-xl border p-7">
            <div className="flex items-start justify-between"><div className="text-4xl">{service.icon}</div><ArrowUpRight className="text-stone-500 transition group-hover:text-orange-400" size={23}/></div>
            <h3 className="mt-8 font-display text-2xl font-bold text-white">{service.title}</h3><p className="mt-3 leading-7 text-stone-400">{service.description}</p>
          </motion.div>)}
        </div>
      </div>
    </section>
  );
}