import { motion } from "framer-motion";
import { gallery } from "../data/cateringData";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="font-semibold uppercase tracking-[4px] text-orange-600">Our Gallery</span><h2 className="mt-4 font-display text-4xl font-bold text-stone-900 sm:text-5xl">Moments We Have Served</h2></div><p className="max-w-md text-sm leading-6 text-stone-500">A glimpse of our food, celebrations and beautiful event setups across Tamil Nadu.</p></div>
        <div className="mt-12 grid auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((item,index) => <motion.div key={item.title} whileHover={{scale:.985}} className={`premium-image-card group relative overflow-hidden rounded-xl ${index===0||index===5 ? "md:row-span-2" : ""}`}>
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100"/>
            <div className="absolute bottom-0 translate-y-5 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><h3 className="font-display text-xl font-bold">{item.title}</h3></div>
          </motion.div>)}
        </div>
      </div>
    </section>
  );
}