import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const isMenuPage = window.location.pathname.startsWith("/menu/");
  const sectionHref = id => isMenuPage ? `/#${id}` : `#${id}`;
  return (
    <footer className="bg-stone-950 px-5 pt-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div><img src="/images/Tamil-Viruindhu-Catering.png" alt="" className="h-16 max-w-[260px] rounded bg-white p-2 object-contain object-left"/><h2 className="mt-3 font-display text-lg font-bold text-[#dfbd6a]">Tamil Viruindhu Catering</h2><p className="mt-4 max-w-sm text-sm leading-7 text-stone-400">Authentic Tamil Nadu catering for weddings, celebrations, corporate events and family functions.</p><div className="mt-6 flex gap-3">{[Instagram,Facebook,Youtube].map((Icon,index)=><a key={index} href="#" className="icon-action rounded-full border border-white/10 p-3 transition hover:bg-orange-600"><Icon size={18}/></a>)}</div></div>
        <div><h3 className="font-bold">Quick Links</h3><div className="mt-5 space-y-3 text-sm text-stone-400">{[["Home","home"],["About Us","about"],["Services","services"],["Menu","menu"],["Packages","packages"]].map(([label,id])=><a key={id} href={sectionHref(id)} className="block hover:text-orange-400">{label}</a>)}</div></div>
        <div><h3 className="font-bold">Our Services</h3><div className="mt-5 space-y-3 text-sm text-stone-400"><p>Wedding Catering</p><p>Corporate Catering</p><p>Birthday Catering</p><p>Engagement Catering</p><p>Traditional Functions</p></div></div>
        <div><h3 className="font-bold">Contact</h3><div className="mt-5 space-y-4 text-sm text-stone-400"><div className="flex gap-3"><MapPin size={18} className="shrink-0 text-orange-400"/>Tamil Nadu, India</div><div className="flex gap-3"><Phone size={18} className="shrink-0 text-orange-400"/>+91 98765 43210</div><div className="flex gap-3"><Mail size={18} className="shrink-0 text-orange-400"/>hello@thamizhvirundhu.in</div></div></div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-stone-500">© 2026 Tamil Viruindhu Catering. All Rights Reserved.</div>
    </footer>
  );
}