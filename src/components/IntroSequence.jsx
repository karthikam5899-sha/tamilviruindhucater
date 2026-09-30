import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function IntroSequence({ onComplete }) {
  const [stage, setStage] = useState("brand");
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const brandDuration = prefersReducedMotion ? 300 : 1450;
    const totalDuration = prefersReducedMotion ? 850 : 3300;
    const mealTimer = window.setTimeout(() => setStage("meal"), brandDuration);
    const finishTimer = window.setTimeout(() => setVisible(false), totalDuration);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(mealTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion]);

  const animationDuration = prefersReducedMotion ? 0.2 : 0.65;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && <motion.div key="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: animationDuration }} className="fixed inset-0 z-[100] bg-[#171511]" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {stage === "brand" ? (
            <motion.section key="brand" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: animationDuration }} className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6 text-center">
              <div className="absolute inset-x-8 top-8 h-px bg-white/20 sm:inset-x-16" />
              <motion.div initial={{ scale: 0.94 }} animate={{ scale: 1 }} transition={{ duration: prefersReducedMotion ? 0.2 : 0.9, ease: "easeOut" }}>
                <img src="/images/Tamil-Viruindhu-Catering.png" alt="Tamil Viruindhu Catering logo" className="mx-auto h-24 max-w-[280px] rounded-lg bg-white p-3 object-contain shadow-2xl sm:h-32 sm:max-w-[360px]" />
                <h1 className="mt-7 font-display text-3xl font-bold text-[#dfbd6a] sm:text-5xl">Tamil Viruindhu Catering</h1>
                <p className="mt-3 text-sm text-orange-200 sm:text-base">A feast rooted in Tamil tradition</p>
              </motion.div>
              <div className="absolute inset-x-8 bottom-8 h-px bg-white/20 sm:inset-x-16" />
            </motion.section>
          ) : (
            <motion.section key="meal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: animationDuration }} className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-stone-950">
              <motion.img src="/images/Traditional-Meals.jpg" alt="Traditional Tamil Nadu meal served on a banana leaf" initial={{ scale: prefersReducedMotion ? 1 : 1.12 }} animate={{ scale: 1 }} transition={{ duration: prefersReducedMotion ? 0.2 : 1.8, ease: "easeOut" }} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-stone-950/45" />
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: prefersReducedMotion ? 0 : 0.35, duration: animationDuration }} className="relative max-w-3xl px-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[3px] text-orange-200 sm:text-sm">Tamil Viruindhu Catering</p>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">A leaf full of tradition.</h2>
                <p className="mt-4 text-base text-white/90 sm:text-lg">Made to be shared. Remembered for every celebration.</p>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
        <button type="button" onClick={() => setVisible(false)} className="absolute bottom-6 right-6 z-10 rounded-full border border-white/50 bg-black/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-white">Skip intro</button>
      </motion.div>}
    </AnimatePresence>
  );
}