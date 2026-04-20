import { motion } from 'motion/react';
import { Gamepad2, Box, Home, Info } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  projects: Project[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ projects, selectedId, onSelect }: SidebarProps) {
  const menuItems = [
    { id: 'welcome', label: '首頁', icon: Home },
    ...projects.map(p => ({
      id: p.id,
      label: p.title,
      icon: p.type === 'game' ? Gamepad2 : Box
    }))
  ];

  return (
    <aside className="w-72 glass border-r border-white/5 flex flex-col h-[calc(100vh-5rem)] sticky top-20">
      <div className="p-6">
        <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
          作品選單 / MENU
        </h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedId === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                  isActive 
                    ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-blue-500 rounded-full"
                  />
                )}
                <Icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300")} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-6 border-t border-white/5">
        <div className="p-4 rounded-xl bg-blue-600/5 border border-blue-500/10">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Info className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">提示</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            點擊作品名稱即可在右側預覽完整內容與創作心得。
          </p>
        </div>
      </div>
    </aside>
  );
}
