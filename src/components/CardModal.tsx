import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../types';
import { cn } from '../lib/utils';

interface CardModalProps {
  card: Card | null;
  onClose: () => void;
  onNavigate: (dir: number) => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function CardModal({ card, onClose, onNavigate, hasPrev, hasNext }: CardModalProps) {
  // Disable body scroll when modal is open and scroll to top on card change
  useEffect(() => {
    if (card) {
      document.body.style.overflow = 'hidden';
      // Scroll modal to where the image starts (skipping top UI padding)
      const imageStart = document.getElementById('modal-card-start');
      if (imageStart) {
        imageStart.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [card?.id]);

  // Display 'Permanent Duo' as 'Duo'
  const displayType = card?.type === 'Permanent Duo' ? 'Duo' : card?.type;

  return (
    <AnimatePresence>
      {card && (
        <motion.div
          id="modal-scroll-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black overflow-y-auto scroll-smooth"
          onClick={onClose}
        >
          {/* Fixed UI Layer - Navigation and Close Button */}
          <div className="fixed inset-0 pointer-events-none z-[150]">
            {/* Close Button - Fixed Top Right */}
            <div className="absolute top-4 md:top-8 right-4 md:right-8 pointer-events-auto">
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110 active:scale-90 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-start justify-center p-6 md:p-12 pt-24 md:pt-32 pb-12 min-h-full relative z-[100]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="relative flex flex-col items-center gap-6 md:gap-8 w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >


              <div id="modal-card-start" className="relative group w-full flex justify-center scroll-mt-6 md:scroll-mt-12">
                <div className={cn(
                  "relative transition-all duration-500",
                )}>
                  <div className={cn(
                    "relative rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,1)] border-[4px] border-white/10 bg-black/20",
                    card.rarity === 'godly' && "rarity-godly-glow",
                    card.rarity === 'ultimate' && "rarity-ultimate-glow",
                    card.rarity === 'celestial' && "rarity-celestial-glow",
                    card.rarity === 'standard' && "rarity-standard-glow"
                  )}>
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] w-auto h-auto object-contain block relative z-10"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Inner border overlay */}
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] pointer-events-none z-20" />
                </div>
                  {/* Desktop Navigation - Attached to the side of the card wrapper */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-24 -right-12 md:-right-24 hidden md:flex items-center justify-between z-20 pointer-events-none">
                    <button
                      onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
                      disabled={!hasPrev}
                      className="pointer-events-auto w-16 h-16 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center transition-all hover:bg-white/20 disabled:opacity-10 disabled:cursor-not-allowed backdrop-blur-md shadow-2xl"
                    >
                      <ChevronLeft size={40} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
                      disabled={!hasNext}
                      className="pointer-events-auto w-16 h-16 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center transition-all hover:bg-white/20 disabled:opacity-10 disabled:cursor-not-allowed backdrop-blur-md shadow-2xl"
                    >
                      <ChevronRight size={40} />
                    </button>
                  </div>
                </div>

                {/* Reflection effect - now outside overflow wrapper */}
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] h-48 bg-gradient-to-b from-white/10 to-transparent blur-3xl opacity-30 pointer-events-none" />
              </div>

              <div className="text-center max-w-xl relative z-10 px-4 mt-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-4xl md:text-7xl font-black tracking-tighter mb-3 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
                >
                  {card.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/40 text-xl md:text-3xl font-medium tracking-tight mb-6"
                >
                  {card.series}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-3 md:gap-4"
                >
                  <div className={cn(
                    "px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl border-2 font-mono text-xs md:text-base font-black tracking-[0.2em] uppercase shadow-xl bg-black/40 backdrop-blur-md",
                    card.rarity === 'godly' && "text-godly border-godly",
                    card.rarity === 'ultimate' && "text-ultimate border-ultimate bg-gradient-to-br from-red-600/20 to-black/80",
                    card.rarity === 'celestial' && "text-celestial border-celestial",
                    card.rarity === 'standard' && "text-standard border-standard"
                  )}>
                    {card.rarity}
                  </div>
                  <div className={cn(
                    "px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl border-2 font-mono text-xs md:text-base font-black tracking-[0.2em] uppercase shadow-xl bg-black/40 backdrop-blur-md",
                    card.type === 'Exclusive' && "text-white border-exclusive-purple bg-gradient-to-br from-exclusive-purple/40 to-exclusive-blue/40",
                    card.type === 'Permanent' && "text-permanent border-permanent",
                    card.type === 'Permanent Duo' && "text-duo-gold border-duo-gold bg-gradient-to-br from-duo-gold/20 to-black/80",
                    card.type === 'Valentine' && "text-valentine-pink border-valentine-pink bg-gradient-to-br from-valentine-pink/20 to-valentine-light/20",
                    !['Exclusive', 'Permanent', 'Permanent Duo', 'Valentine'].includes(card.type) && "text-white/60 border-white/10"
                  )}>
                    {displayType}
                  </div>
                </motion.div>

                {/* Mobile Navigation - Fixed at bottom */}
                <div className="flex md:hidden items-center justify-center gap-6 mt-8 mb-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
                    disabled={!hasPrev}
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center disabled:opacity-10 active:scale-90 transition-transform"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
                    disabled={!hasNext}
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center disabled:opacity-10 active:scale-90 transition-transform"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 0.4 }}
                  className="font-mono text-xs tracking-[0.5em] uppercase mt-12 mb-8"
                >
                  Catalog Entry #{card.id.toString().padStart(4, '0')}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
