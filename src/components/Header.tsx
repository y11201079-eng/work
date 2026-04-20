import { motion } from 'motion/react';
import { Terminal, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 glass flex items-center justify-between px-8 z-30 sticky top-0">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Terminal className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-display font-bold tracking-tight text-white">
            114-2 高三科技應用專題作品集
          </h1>
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Portfolio System v1.0
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-white">31112 吳咸宏</p>
          <p className="text-[10px] text-slate-500 font-mono">STUDENT ID: 31112</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/20">
          <User className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </header>
  );
}
