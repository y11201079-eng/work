import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface IntroOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function IntroOverlay({ isVisible, onComplete }: IntroOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 tech-grid opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="inline-block mb-6 p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <Sparkles className="w-12 h-12 text-blue-400" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              探索科技的<span className="text-blue-400">無限可能</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              這不僅僅是一個作品集，而是一段關於學習、實作與創新的旅程。<br />
              從網頁遊戲到 3D 建模，見證科技如何將想像化為現實。
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-medium transition-all overflow-hidden"
            >
              <span className="relative z-10">進入作品集</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 text-slate-500 font-mono text-sm"
          >
            114-2 高三科技應用專題作品集
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
