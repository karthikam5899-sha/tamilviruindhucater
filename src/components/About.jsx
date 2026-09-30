import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = ["Authentic Tamil Nadu recipes","Fresh and quality ingredients","Professional serving team","Customized event menus","Hygienic preparation","On-time event service"];
  return (
    <section id="about" className="bg-[#f5f4eb] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=80" alt="Traditional Tamil food" className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"/>
            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-orange-600 p-6 text-white shadow-xl sm:-right-7"><div className="font-display text-4xl font-bold">15+</div><div className="text-sm">Years of Taste</div></div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <span className="font-semibold uppercase tracking-[4px] text-orange-600">About Us</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-stone-900 sm:text-5xl">A Taste That Feels<span className="text-orange-600"> Like Home</span></h2>
          <p className="mt-6 leading-8 text-stone-600">At Tamil Viruindhu Catering, food is more than just a meal. It is tradition, celebration and hospitality. We create authentic Tamil Nadu flavours using carefully selected ingredients and time-tested recipes.</p>
          <p className="mt-4 leading-8 text-stone-600">From intimate family functions to large-scale weddings, our team takes care of every detail so you can enjoy your celebration.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">{features.map(feature => <div key={feature} className="flex items-center gap-2"><CheckCircle2 className="text-orange-600" size={19}/><span className="text-sm font-medium text-stone-700">{feature}</span></div>)}</div>
        </motion.div>
      </div>
    </section>
  );
}