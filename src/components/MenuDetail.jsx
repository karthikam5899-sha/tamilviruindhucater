import { ArrowLeft, ArrowRight, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function MenuDetail({ category }) {
  return (
    <>
      <section className="relative isolate flex min-h-[55vh] items-end overflow-hidden bg-stone-950">
        <img src={category.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/20" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8">
          <a href="/#menu" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"><ArrowLeft size={16}/>All menus</a>
          <p className="mt-10 text-xs font-bold uppercase tracking-[3px] text-orange-300">Tamil Viruindhu Catering · Signature Menu</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{category.menuTitle}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-200">{category.description}</p>
        </div>
      </section>
      <section className="bg-[#f5f4eb] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="font-semibold uppercase tracking-[3px] text-orange-700">Made for sharing</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-stone-900 sm:text-4xl">A feast, thoughtfully composed.</h2>
            <p className="mt-5 leading-7 text-stone-600">Prepared fresh for your celebration, with familiar regional flavors and generous variety in every serving.</p>
            <a href="/#contact" className="button-premium mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold"><CalendarCheck size={17}/>Plan your event</a>
          </motion.div>
          <div className="grid content-start gap-x-10 sm:grid-cols-2">
            {category.menuItems.map((item, index) => <div key={item} className="flex min-h-16 items-center gap-4 border-b border-stone-300/80 py-4">
              <span className="font-display text-sm font-bold text-orange-700">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium leading-6 text-stone-800">{item}</span>
            </div>)}
          </div>
        </div>
      </section>
      <section className="bg-stone-900 px-5 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-display text-2xl font-bold">Bring this menu to your celebration.</p><p className="mt-2 text-sm text-stone-300">Tell us your date, location, and guest count.</p></div>
          <a href="/#contact" className="button-premium inline-flex shrink-0 items-center gap-2 rounded-lg px-5 py-3 font-bold">Request a quote<ArrowRight size={17}/></a>
        </div>
      </section>
    </>
  );
}