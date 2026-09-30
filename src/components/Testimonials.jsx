import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/cateringData";

export default function Testimonials() {
  return (
    <section className="bg-stone-950 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><span className="font-semibold uppercase tracking-[4px] text-orange-400">Testimonials</span><h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">Loved By Our Guests</h2></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item,index) => <motion.div key={item.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.1}} className="premium-card-dark rounded-xl border p-7">
            <Quote className="text-orange-400" size={35}/><div className="mt-5 flex gap-1">{[...Array(item.rating)].map((_,i)=><Star key={i} size={16} className="fill-orange-400 text-orange-400"/>)}</div>
            <p className="mt-5 leading-7 text-stone-300">“{item.text}”</p>
            <div className="mt-7 border-t border-white/10 pt-5"><div className="font-bold text-white">{item.name}</div><div className="mt-1 text-sm text-stone-500">{item.location}</div></div>
          </motion.div>)}
        </div>
      </div>
    </section>
  );
}