import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "home"], ["About", "about"], ["Services", "services"],
  ["Menu", "menu"], ["Packages", "packages"], ["Gallery", "gallery"], ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMenuPage = window.location.pathname.startsWith("/menu/");
  const sectionHref = id => isMenuPage ? `/#${id}` : `#${id}`;
  return (
    <header className="fixed top-0 z-50 w-full border-b border-orange-300/30 bg-[#171511]/95 text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href={sectionHref("home")} className="flex items-center gap-3">
          <img src="/images/Tamil-Viruindhu-Catering.png" alt="" className="h-10 w-10 shrink-0 rounded-md bg-white p-1 object-contain shadow-sm sm:h-11 sm:w-auto sm:max-w-[160px]" />
          <span className="max-w-[145px] font-display text-base font-bold leading-tight text-[#dfbd6a] sm:max-w-none sm:text-lg">Tamil Viruindhu Catering</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label,id]) => <a key={id} href={sectionHref(id)} className="text-sm font-semibold text-stone-100 transition hover:text-orange-300">{label}</a>)}
          <a href={sectionHref("contact")} className="button-premium rounded-lg px-5 py-2.5 text-sm font-bold">Book Now</a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} className="icon-action rounded-lg p-2 text-orange-100 hover:bg-white/10 lg:hidden">{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="border-t border-orange-300/20 bg-[#171511] px-5 py-5 lg:hidden"><div className="flex flex-col gap-4">
        {links.map(([label,id]) => <a key={id} href={sectionHref(id)} onClick={() => setOpen(false)} className="font-semibold text-stone-100 transition hover:text-orange-300">{label}</a>)}
      </div></div>}
    </header>
  );
}