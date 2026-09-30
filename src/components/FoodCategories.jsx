import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { foodCategories } from "../data/cateringData";

export default function FoodCategories() {
  return (
    <section id="menu" className="bg-[#fcfcf6] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><span className="font-semibold uppercase tracking-[4px] text-orange-600">Our Menu</span><h2 className="mt-4 font-display text-4xl font-bold text-stone-900 sm:text-5xl">Flavours of Tamil Nadu</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-500">Explore our collection of traditional and contemporary dishes made especially for celebrations.</p></div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {foodCategories.map((category,index) => <motion.article key={category.name} initial={{opacity:0,scale:.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:index*.1}} className="premium-image-card group relative overflow-hidden rounded-xl">
            <img src={category.image} alt={category.name} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
            <div className="absolute bottom-0 p-6 text-white"><h3 className="font-display text-2xl font-bold">{category.name}</h3><p className="mt-2 text-sm text-stone-200">{category.description}</p><a href={`/menu/${category.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-300">View Menu<ArrowRight size={16}/></a></div>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}