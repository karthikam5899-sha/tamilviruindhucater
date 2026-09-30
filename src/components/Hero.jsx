import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:'url("/images/home-page.png")'}} />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
            <Star size={15} className="fill-orange-400 text-orange-400"/> Authentic Tamil Nadu Catering
          </div>
          <h2 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-8xl">
            Taste the<span className="block text-orange-400">Tradition.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">From traditional banana-leaf feasts to grand wedding celebrations, we bring the authentic flavours of Tamil Nadu to your special day.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="button-premium flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-bold"><CalendarCheck size={19}/>Plan Your Event</a>
              <a href="#menu" className="button-secondary flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur hover:border-orange-300 hover:bg-orange-200 hover:text-stone-900">Explore Menu<ArrowRight size={18}/></a>
          </div>
        </motion.div>
        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6">
          {[["15+","Years Experience"],["500+","Events Served"],["50K+","Happy Guests"]].map(([number,label]) =>
            <div key={label} className="premium-card-dark rounded-xl border p-4 backdrop-blur-md">
              <div className="font-display text-2xl font-bold text-orange-400 sm:text-3xl">{number}</div>
              <div className="mt-1 text-xs text-stone-300 sm:text-sm">{label}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}