import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../types';
import { cn } from '../lib/utils';

interface CardFrameProps {
  card: Card;
  className?: string;
  isFeatured?: boolean;
  onClick?: () => void;
  key?: string | number;
}

export default function CardFrame({ card, className, isFeatured, onClick }: CardFrameProps) {
  const [shape, setShape] = useState<'standard' | 'square' | 'portrait' | 'landscape' | 'tall' | 'auto'>('standard');

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const ratio = w / h;

    // Let the image ratio decide the shape instead of hardcoding 'duo'
    if (ratio > 1.1) {
      setShape('landscape');
    } else if (Math.abs(ratio - 1) < 0.15) {
      setShape('square');
    } else if (ratio < 0.45) {
      setShape('tall');
    } else if (ratio < 0.7) {
      setShape('portrait');
    } else if (ratio < 0.85) {
      setShape('standard');
    } else {
      setShape('auto');
    }
  };

  const shapeStyles = {
    standard: 'w-full aspect-[3/4.2] max-w-[20rem]',
    square: 'w-full aspect-square max-w-sm',
    portrait: 'w-full aspect-[2/3.2] max-w-xs',
    landscape: 'w-full aspect-[1.8/1] max-w-lg',
    tall: 'w-full aspect-[9/18] max-w-xs',
    auto: 'w-full max-w-sm',
  };

  const rarityGlow: Record<string, string> = {
    godly: 'shadow-[0_0_40px_-10px_rgba(255,105,180,0.5),inset_0_0_20px_-5px_rgba(255,105,180,0.3)] !border-[rgba(255,105,180,0.4)]',
    ultimate: 'shadow-[0_0_40px_-10px_rgba(255,0,0,0.5),inset_0_0_20px_-5px_rgba(0,0,0,0.8)] !border-[rgba(255,0,0,0.6)] bg-[linear-gradient(to_bottom,rgba(255,0,0,0.1),rgba(0,0,0,0.4))]',
    celestial: 'shadow-[0_0_40px_-10px_rgba(135,206,235,0.5),inset_0_0_20px_-5px_rgba(135,206,235,0.3)] !border-[rgba(135,206,235,0.4)]',
    standard: 'shadow-[0_0_40px_-10px_rgba(255,215,0,0.5),inset_0_0_20px_-5px_rgba(255,215,0,0.3)] !border-[rgba(255,215,0,0.4)]',
  };

  // Display 'Permanent Duo' as 'Duo' in the badge as requested
  const displayType = card.type === 'Permanent Duo' ? 'Duo' : card.type;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ 
        type: 'spring', 
        damping: 20, 
        stiffness: 100,
      }}
      onClick={onClick}
      className={cn(
        'relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] border-[3px] border-white/10 bg-black/40 group cursor-pointer',
        shapeStyles[shape],
        rarityGlow[card.rarity],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />
      
      <img
        src={card.imageUrl}
        alt={card.name}
        onLoad={handleLoad}
        className={cn(
          'w-full h-full object-contain block transition-transform duration-700 group-hover:scale-105',
          shape === 'auto' && 'h-auto'
        )}
        referrerPolicy="no-referrer"
        loading={isFeatured ? "eager" : "lazy"}
        decoding={isFeatured ? "auto" : "async"}
      />
      
      {/* Inner border overlay - Double border effect */}
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] pointer-events-none z-[2]" />
      <div className="absolute inset-0.5 rounded-xl border border-white/5 pointer-events-none z-[2]" />
    </motion.div>
  );
}
