import { motion, AnimatePresence } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../types';
import CardFrame from './CardFrame';
import { cn } from '../lib/utils';

interface FeaturedViewerProps {
  cards: Card[];
  currentIndex: number;
  onNavigate: (dir: number) => void;
  onCardClick: (card: Card) => void;
}

export default function FeaturedViewer({ cards, currentIndex, onNavigate, onCardClick }: FeaturedViewerProps) {
  if (cards.length === 0) return null;

  const prevIndexRef = useRef(currentIndex);
  const direction = currentIndex > prevIndexRef.current ? 1 : -1;
  
  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);
  const currentCard = cards[currentIndex];
  const prevCard = cards[currentIndex - 1];
  const nextCard = cards[currentIndex + 1];

  return (
    <div className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center py-6 md:py-10 px-4 md:px-20 overflow-hidden">
      {/* Global Static Navigation Buttons bound to the fixed viewport wrapper */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 right-2 md:right-8 flex items-center justify-between z-[100] pointer-events-none">
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          disabled={currentIndex === 0}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:bg-white/20 disabled:opacity-0 disabled:pointer-events-none shadow-2xl"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          disabled={currentIndex === cards.length - 1}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:bg-white/20 disabled:opacity-0 disabled:pointer-events-none shadow-2xl"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="relative flex items-center justify-center gap-8 md:gap-24 w-full max-w-screen-2xl">
        {/* Previous Card Preview */}
        <div className="hidden lg:block w-48 shrink-0 relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {prevCard && (
              <motion.div
                key={`prev-${prevCard.id}`}
                initial={{ opacity: 0, x: -100, scale: 0.7, rotateY: 25 }}
                animate={{ opacity: 0.2, x: 0, scale: 0.8, rotateY: 25 }}
                exit={{ opacity: 0, x: -100, scale: 0.7, rotateY: 25 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="cursor-pointer filter blur-sm hover:opacity-40 hover:blur-none transition-all duration-500"
                onClick={() => onNavigate(-1)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={prevCard.imageUrl} alt="" className="w-full aspect-[3/4.2] object-cover" referrerPolicy="no-referrer" loading="eager" decoding="auto" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Card Container */}
        <div className="relative flex flex-col items-center justify-center z-10 w-full max-w-xs md:max-w-lg">

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div 
              key={currentCard.id}
              initial={{ opacity: 0, scale: 0.8, x: direction * 150, rotateY: direction * -15 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: direction * -150, rotateY: direction * 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 md:gap-10"
            >
              <div className="relative group scale-90 md:scale-100 mt-4 md:mt-0 h-card-mobile md:h-card-desktop w-full flex items-center justify-center">
                <CardFrame 
                  card={currentCard} 
                  isFeatured 
                  className="shadow-[0_40px_100px_rgba(0,0,0,1)]" 
                  onClick={() => onCardClick(currentCard)}
                />
                {/* Reflection effect */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-b from-white/10 to-transparent blur-3xl opacity-20 pointer-events-none" />
              </div>
              
              <div className="text-center mt-2 md:mt-6 w-full">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-2xl md:text-5xl font-black tracking-tighter mb-2 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
                >
                  {currentCard.name}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/40 text-base md:text-xl font-medium tracking-tight mb-4 md:mb-6"
                >
                  {currentCard.series}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4"
                >
                  <span className={cn(
                    "px-3 md:px-5 py-1 md:py-2 rounded-lg border-2 font-mono text-xxs md:text-xs font-black tracking-widest uppercase shadow-lg",
                    currentCard.rarity === 'godly' && "text-godly border-godly bg-godly/5",
                    currentCard.rarity === 'ultimate' && "text-ultimate border-ultimate bg-ultimate/5",
                    currentCard.rarity === 'celestial' && "text-celestial border-celestial bg-celestial/5",
                    currentCard.rarity === 'standard' && "text-white/40 border-white/10 bg-white/5"
                  )}>
                    {currentCard.rarity}
                  </span>
                  <span className="px-3 md:px-5 py-1 md:py-2 rounded-lg border-2 border-white/10 bg-white/5 font-mono text-xxs md:text-xs font-black tracking-widest uppercase text-white/60 shadow-lg">
                    {currentCard.type === 'Permanent Duo' ? 'Permanent' : currentCard.type}
                  </span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 0.5 }}
                  className="font-mono text-xs tracking-[0.4em] uppercase"
                >
                  Serial #{currentCard.id.toString().padStart(4, '0')}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <div className="absolute -bottom-16 flex items-center gap-3">
            {Array.from({ length: Math.min(9, cards.length) }).map((_, i) => {
              const total = cards.length;
              const start = Math.max(0, Math.min(currentIndex - 4, total - 9));
              const actualIdx = start + i;
              if (actualIdx >= total) return null;
              
              return (
                <div
                  key={actualIdx}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    actualIdx === currentIndex 
                      ? "w-12 bg-gradient-to-r from-godly to-ultimate" 
                      : "w-2 bg-white/10 hover:bg-white/20 cursor-pointer"
                  )}
                  onClick={() => {
                    const diff = actualIdx - currentIndex;
                    if (diff !== 0) onNavigate(diff);
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Next Card Preview */}
        <div className="hidden lg:block w-48 shrink-0 relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {nextCard && (
              <motion.div
                key={`next-${nextCard.id}`}
                initial={{ opacity: 0, x: 100, scale: 0.7, rotateY: -25 }}
                animate={{ opacity: 0.2, x: 0, scale: 0.8, rotateY: -25 }}
                exit={{ opacity: 0, x: 100, scale: 0.7, rotateY: -25 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="cursor-pointer filter blur-sm hover:opacity-40 hover:blur-none transition-all duration-500"
                onClick={() => onNavigate(1)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={nextCard.imageUrl} alt="" className="w-full aspect-[3/4.2] object-cover" referrerPolicy="no-referrer" loading="eager" decoding="auto" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
