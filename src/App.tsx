import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MessageSquare } from 'lucide-react';
import { Card, Rarity } from './types';
import { ALL_CARDS } from './data/cards';
import CardFrame from './components/CardFrame';
import CardModal from './components/CardModal';
import FeaturedViewer from './components/FeaturedViewer';
import { cn } from './lib/utils';
const BackgroundEffects = React.memo(() => (
  <>
    {/* Fixed body background extracted from CSS */}
    <div className="fixed inset-0 pointer-events-none -z-20 bg-[radial-gradient(circle_at_20%_30%,rgba(88,86,214,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(175,82,222,0.2)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(3,0,5,1)_0%,transparent_100%)]" />
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* GPU-accelerated Stardust texture */}
      <div className="absolute -top-[200px] -left-[200px] w-[calc(100%+400px)] h-[calc(100%+400px)] -z-10 opacity-20 bg-repeat bg-[url('https://www.transparenttextures.com/patterns/stardust.png'),radial-gradient(2px_2px_at_20px_30px,#eee,transparent),radial-gradient(2px_2px_at_40px_70px,#fff,transparent),radial-gradient(2px_2px_at_50px_160px,#ddd,transparent),radial-gradient(2px_2px_at_90px_40px,#fff,transparent),radial-gradient(2px_2px_at_130px_80px,#fff,transparent),radial-gradient(2px_2px_at_160px_120px,#ddd,transparent)] bg-[size:200px_200px] animate-galaxy-float" />
      
    {/* Twinkling Stars */}
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        initial={{ 
          top: `${Math.random() * 100}%`, 
          left: `${Math.random() * 100}%`, 
          opacity: Math.random(),
          scale: 0.3 + Math.random() * 0.7
        }}
        animate={{ 
          opacity: [0.1, 1, 0.1],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 2 + Math.random() * 5, 
          repeat: Infinity, 
          delay: Math.random() * 10,
          ease: "easeInOut"
        }}
        className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full blur-[0.3px]"
      />
    ))}

    {/* Floating Particles */}
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        initial={{ 
          top: `${Math.random() * 100}%`, 
          left: `${Math.random() * 100}%`,
          opacity: 0.05 + Math.random() * 0.15
        }}
        animate={{ 
          y: [0, -150, 0],
          x: [0, 80, 0],
          opacity: [0.05, 0.25, 0.05]
        }}
        transition={{ 
          duration: 15 + Math.random() * 25, 
          repeat: Infinity, 
          ease: "linear"
        }}
        className="absolute w-3 h-3 bg-purple-500 rounded-full blur-[3px]"
      />
    ))}

    <motion.div 
      animate={{ 
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
        rotate: [0, 15, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-700/10 blur-[160px]"
    />
    <motion.div 
      animate={{ 
        opacity: [0.15, 0.4, 0.15],
        scale: [1, 1.3, 1],
        rotate: [0, -15, 0]
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-[10%] -right-[5%] w-[70%] h-[70%] rounded-full bg-indigo-700/10 blur-[140px]"
    />
    </div>
  </>
));

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<Rarity | 'all'>('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);
  const [selectedType, setSelectedType] = useState<string | 'all'>('all');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  const rarities: Rarity[] = ['godly', 'ultimate', 'celestial', 'standard'];
  
  const types = useMemo(() => {
    const t = new Set(ALL_CARDS.map(c => c.type));
    return Array.from(t).sort();
  }, []);

  const filteredCards = useMemo(() => {
    return ALL_CARDS.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase()) || 
                           card.series.toLowerCase().includes(search.toLowerCase());
      
      const cardRarity = card.rarity.toLowerCase();
      const isStandard = cardRarity.includes('rare') || cardRarity.includes('epic') || cardRarity.includes('legendary') || cardRarity === 'standard';
      
      const matchesRarity = selectedRarity === 'all' || 
                           (selectedRarity === 'standard' && isStandard) ||
                           (selectedRarity === cardRarity);
      
      const matchesType = selectedType === 'all' || card.type === selectedType;
      
      return matchesSearch && matchesRarity && matchesType;
    });
  }, [search, selectedRarity, selectedType]);

  // Reset to page 1 when filters change and scroll to grid start
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedRarity, selectedType]);

  useEffect(() => {
    // Only scroll if we are not on initial mount
    if (currentPage > 1 || search || selectedRarity !== 'all' || selectedType !== 'all') {
      const gridStart = document.getElementById('archive-start');
      if (gridStart) {
        gridStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentPage]);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const paginatedCards = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    return filteredCards.slice(start, start + cardsPerPage);
  }, [filteredCards, currentPage]);

  const featuredCards = useMemo(() => {
    return ALL_CARDS.filter(c => ['godly', 'ultimate', 'celestial'].includes(c.rarity)).slice(0, 15);
  }, []);

  const handleNavigateModal = (dir: number) => {
    if (!selectedCard) return;
    const idx = filteredCards.findIndex(c => c.id === selectedCard.id);
    const nextIdx = idx + dir;
    if (nextIdx >= 0 && nextIdx < filteredCards.length) {
      setSelectedCard(filteredCards[nextIdx]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Galaxy Background Effects */}
      <BackgroundEffects />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-4 md:pb-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic flex items-center gap-3">
            <div className="relative group">
              <motion.span
                animate={{ 
                  color: ['#af52de', '#5856d6', '#00ffff', '#ff00ff', '#af52de'],
                  textShadow: [
                    '0 0 30px rgba(175, 82, 222, 0.7)',
                    '0 0 60px rgba(88, 86, 214, 1)',
                    '0 0 60px rgba(0, 255, 255, 1)',
                    '0 0 60px rgba(255, 0, 255, 1)',
                    '0 0 30px rgba(175, 82, 222, 0.7)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                Akane
              </motion.span>
              
              {/* Glint Effect */}
              <motion.div
                animate={{ left: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
              />
              
              {/* Background Glow Layers */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -z-10 blur-3xl bg-purple-600/40 rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.2, 1.4, 1.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 -z-20 blur-[60px] bg-indigo-600/30 rounded-full"
              />
            </div>
            
            <span className="text-white/10">.gg</span>
            
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
                filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl ml-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            >
              ✨
            </motion.div>
          </h1>
        </motion.div>
        
        <div className="flex flex-col items-center md:items-end gap-4 md:gap-6 w-auto">
          <a 
            href="https://discord.gg/akanebot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
            title="Join Discord"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.095 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.095 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
            </svg>
            <span className="font-bold text-xs">JOIN DISCORD</span>
          </a>

          {/* Archive Stats / Odds Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 md:gap-6 p-4 md:p-8 rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 backdrop-blur-3xl w-full max-w-md md:min-w-96 shadow-[0_50px_120px_rgba(0,0,0,0.6)] hover:bg-white/[0.07] transition-colors duration-500"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xxs md:text-xs font-black tracking-widest text-white/30 uppercase">Archive Stats</span>
              <span className="px-2 md:px-3 py-1 rounded-lg md:rounded-xl bg-white/10 font-mono text-tiny md:text-xxs font-bold text-white/60 tracking-widest">600+ USERS</span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 md:gap-x-10 gap-y-3 md:gap-y-5">
              <div className="flex items-center gap-2 md:gap-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-godly/20 border border-godly/40 flex items-center justify-center font-black text-xs md:text-base text-godly shadow-[0_0_15px_rgba(255,105,180,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,105,180,0.6)]">G</div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-black tracking-tight">54</span>
                  <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Godly</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-ultimate/20 border border-ultimate/40 flex items-center justify-center font-black text-xs md:text-base text-ultimate shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]">U</div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-black tracking-tight">153</span>
                  <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Ultimate</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-celestial/20 border border-celestial/40 flex items-center justify-center font-black text-xs md:text-base text-celestial shadow-[0_0_15px_rgba(135,206,235,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(135,206,235,0.6)]">C</div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-black tracking-tight">605</span>
                  <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Celestial</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center font-black text-xs md:text-base text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]">L</div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-black tracking-tight">2,937</span>
                  <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Legendary</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-black text-xs md:text-base text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">E</div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-black tracking-tight">30,955</span>
                  <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Epic</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-black text-xs md:text-base text-white/60 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">R</div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-black tracking-tight">136,377</span>
                  <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Rare</span>
                </div>
              </div>
            </div>

            <div className="mt-1 md:mt-4 pt-4 md:pt-6 border-t border-white/5 grid grid-cols-3 gap-1 md:gap-4">
              <div className="flex flex-col">
                <span className="text-xxs md:text-sm font-black tracking-tight">171,081+</span>
                <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Total Cards</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xxs md:text-sm font-black tracking-tight">544</span>
                <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Characters</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xxs md:text-sm font-black tracking-tight">165</span>
                <span className="text-tiny md:text-xxs font-bold text-white/20 uppercase tracking-widest">Series</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Section */}
      <section className="w-full mb-10">
        <FeaturedViewer 
          cards={featuredCards} 
          currentIndex={featuredIndex} 
          onNavigate={(dir) => setFeaturedIndex(prev => Math.max(0, Math.min(featuredCards.length - 1, prev + dir)))}
          onCardClick={setSelectedCard}
        />
      </section>

      {/* Filter Section - Not sticky as requested */}
      <section id="archive-start" className="w-full max-w-5xl mx-auto px-6 mb-12 scroll-mt-24">
        <div className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-3xl flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xxs font-black tracking-widest text-white/30 uppercase text-center md:text-left">Rarity</span>
            <div className="flex flex-col gap-4">
              {/* Rarities */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                <motion.button
                  onClick={() => setSelectedRarity('all')}
                  animate={selectedRarity === 'all' ? {
                    borderColor: '#ffffff',
                    backgroundColor: '#ffffff'
                  } : {
                    borderColor: 'rgba(255,255,255,0.1)',
                    backgroundColor: 'transparent'
                  }}
                  className={cn(
                    "px-4 md:px-6 py-2 md:py-2.5 rounded-xl border-2 font-mono text-[10px] md:text-xs font-black tracking-widest uppercase transition-all",
                    selectedRarity === 'all' ? "text-black" : "text-white/40 hover:border-white/30"
                  )}
                >
                  All
                </motion.button>
                {['godly', 'ultimate', 'celestial', 'standard'].map((r) => (
                  <motion.button
                    key={r}
                    onClick={() => setSelectedRarity(r as Rarity)}
                    animate={selectedRarity === r ? {
                      borderColor: r === 'ultimate' ? ['#ff0000', '#000000', '#ff0000'] : `var(--color-${r})`,
                      backgroundColor: r === 'ultimate' ? ['#ff0000', '#000000', '#ff0000'] : `var(--color-${r})`
                    } : {
                      borderColor: 'rgba(255,255,255,0.1)',
                      backgroundColor: 'transparent'
                    }}
                    transition={r === 'ultimate' ? { duration: 3, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                    className={cn(
                      "px-4 md:px-6 py-2 md:py-2.5 rounded-xl border-2 font-mono text-xxs md:text-xs font-black tracking-widest uppercase transition-all",
                      selectedRarity === r ? (r === 'ultimate' ? "text-white" : "text-black") : "text-white/40 hover:border-white/30"
                    )}
                  >
                    {r}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-xxs font-black tracking-[0.3em] text-white/30 uppercase text-center md:text-left">Type</span>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              <motion.button
                onClick={() => setSelectedType('all')}
                animate={selectedType === 'all' ? {
                  borderColor: '#ffffff',
                  backgroundColor: '#ffffff'
                } : {
                  borderColor: 'rgba(255,255,255,0.1)',
                  backgroundColor: 'transparent'
                }}
                className={cn(
                  "px-4 md:px-6 py-2 md:py-2.5 rounded-xl border-2 font-mono text-[10px] md:text-xs font-black tracking-widest uppercase transition-all",
                  selectedType === 'all' ? "text-black" : "border-white/10 text-white/40 hover:border-white/30"
                )}
              >
                All
              </motion.button>
              {types.map((t) => {
                const isExclusive = t === 'Exclusive';
                const isPermanent = t === 'Permanent';
                const isDuo = t === 'Permanent Duo';
                const isValentine = t === 'Valentine';
                
                let activeStyles = {
                  borderColor: '#ffffff',
                  backgroundColor: '#ffffff'
                };

                if (isExclusive) {
                  activeStyles = { borderColor: '#a855f7', backgroundColor: '#a855f7' };
                } else if (isPermanent) {
                  activeStyles = { borderColor: '#ffd700', backgroundColor: '#ffd700' };
                } else if (isDuo) {
                  activeStyles = { borderColor: '#fbbf24', backgroundColor: '#fbbf24' };
                } else if (isValentine) {
                  activeStyles = { borderColor: '#f472b6', backgroundColor: '#f472b6' };
                }

                return (
                  <motion.button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    animate={selectedType === t ? activeStyles : {
                      borderColor: 'rgba(255,255,255,0.1)',
                      backgroundColor: 'transparent'
                    }}
                    className={cn(
                      "px-4 md:px-6 py-2 md:py-2.5 rounded-xl border-2 font-mono text-xxs md:text-xs font-black tracking-widest uppercase transition-all",
                      selectedType === t ? "text-black" : "border-white/10 text-white/40 hover:border-white/30"
                    )}
                  >
                    {t === 'Permanent Duo' ? 'Duo' : t}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/60 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search the archive..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full h-16 pl-14 pr-6 rounded-2xl bg-black/40 border border-white/10 focus:border-white/30 focus:outline-none font-medium text-lg transition-all placeholder:text-white/10"
            />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
          <AnimatePresence mode="popLayout">
            {paginatedCards.map((card) => (
              <div key={card.id} className="flex flex-col items-center w-full group/card">
                <CardFrame 
                  card={card} 
                  onClick={() => setSelectedCard(card)}
                />
                <div className="mt-4 text-center w-full px-2">
                  <h3 className="text-sm md:text-base font-bold text-white/90 truncate mb-0.5">{card.name}</h3>
                  <p className="text-xxs md:text-xs text-white/30 truncate mb-2">{card.series}</p>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className={cn(
                      "px-2 py-0.5 rounded-md border font-mono text-tiny md:text-xxs font-black tracking-widest uppercase",
                      card.rarity.includes('godly') && "text-godly border-godly/30 bg-godly/5",
                      card.rarity.includes('ultimate') && "text-ultimate border-ultimate/30 bg-ultimate/5",
                      card.rarity.includes('celestial') && "text-celestial border-celestial/30 bg-celestial/5",
                      card.rarity.includes('legendary') && "text-yellow-500 border-yellow-500/30 bg-yellow-500/5",
                      card.rarity.includes('epic') && "text-purple-500 border-purple-500/30 bg-purple-500/5",
                      card.rarity.includes('rare') && "text-white/60 border-white/20 bg-white/5",
                      (!card.rarity.includes('godly') && !card.rarity.includes('ultimate') && !card.rarity.includes('celestial') && !card.rarity.includes('legendary') && !card.rarity.includes('epic') && !card.rarity.includes('rare')) && "text-white/40 border-white/10 bg-white/5"
                    )}>
                      {card.rarity.split(',')[0]}
                    </span>
                    <span className="px-2 py-0.5 rounded-md border border-white/10 bg-white/5 font-mono text-tiny md:text-xxs font-black tracking-widest uppercase text-white/40">
                      {card.type === 'Permanent Duo' ? 'Duo' : card.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredCards.length === 0 ? (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Search size={40} className="text-white/10" />
            </div>
            <h3 className="text-2xl font-bold text-white/40">No cards found</h3>
            <p className="text-white/20">Try adjusting your filters or search query</p>
          </div>
        ) : (
          /* Pagination Controls */
          totalPages > 1 && (
            <div className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-2 md:gap-4 pb-12 md:pb-20">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 md:px-6 py-2 md:py-3 rounded-xl border-2 border-white/10 text-white/40 font-bold transition-all hover:border-white/30 disabled:opacity-5 disabled:cursor-not-allowed text-xs md:text-base"
              >
                Prev
              </button>
              <div className="flex items-center gap-1 md:gap-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1;
                  // Show limited pages if too many
                  if (totalPages > 5) {
                    if (p !== 1 && p !== totalPages && Math.abs(p - currentPage) > 1) {
                      if (p === 2 || p === totalPages - 1) return <span key={p} className="text-white/20 text-xs md:text-base">...</span>;
                      return null;
                    }
                  }
                  return (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={cn(
                        "w-8 h-8 md:w-12 md:h-12 rounded-xl border-2 font-bold transition-all text-xs md:text-base",
                        currentPage === p ? "bg-white text-black border-white" : "border-white/10 text-white/40 hover:border-white/30"
                      )}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 md:px-6 py-2 md:py-3 rounded-xl border-2 border-white/10 text-white/40 font-bold transition-all hover:border-white/30 disabled:opacity-5 disabled:cursor-not-allowed text-xs md:text-base"
              >
                Next
              </button>
            </div>
          )
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/5 text-center">
        <p className="text-white/10 font-mono text-xxs tracking-[0.5em] uppercase">
          AkaneBot Card Gallery &copy; 2026
        </p>
      </footer>

      {/* Modal */}
      <CardModal 
        card={selectedCard} 
        onClose={() => setSelectedCard(null)}
        onNavigate={handleNavigateModal}
        hasPrev={filteredCards.findIndex(c => c?.id === selectedCard?.id) > 0}
        hasNext={filteredCards.findIndex(c => c?.id === selectedCard?.id) < filteredCards.length - 1}
      />
      </div>
    </div>
  );
}
