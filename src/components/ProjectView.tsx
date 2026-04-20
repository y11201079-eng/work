import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, MessageSquare, Lightbulb, X, Home } from 'lucide-react';
import { Project } from '../types';
import { useState } from 'react';

interface ProjectViewProps {
  project: Project | null;
}

export default function ProjectView({ project }: ProjectViewProps) {
  const [showModal, setShowModal] = useState(false);

  if (!project || project.id === 'welcome') {
    return (
      <div className="flex-1 p-12 flex flex-col items-center justify-center text-center tech-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
            <Home className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-4xl font-display font-bold text-white mb-6">歡迎來到我的學習歷程</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            請從左側選單選擇一個作品，以查看詳細的開發過程、技術細節以及我的創作心得。
            每個作品都代表了我對科技應用的探索與熱情。
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-8 lg:p-12 relative">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-mono uppercase tracking-widest border border-blue-500/30">
                {project.type === 'game' ? 'Web Game' : '3D Modeling'}
              </span>
              <span className="text-slate-600 font-mono text-xs">ID: {project.id}</span>
            </div>
            <h2 className="text-5xl font-display font-bold text-white tracking-tight">{project.name}</h2>
            {project.description && (
              <p className="mt-4 text-slate-400 text-lg max-w-2xl">{project.description}</p>
            )}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-all font-medium"
            >
              <Lightbulb className="w-5 h-5" />
              重點提醒
            </button>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all font-medium shadow-lg shadow-blue-600/20"
            >
              <ExternalLink className="w-5 h-5" />
              開啟作品
            </a>
          </div>
        </div>

        {/* Preview Section */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <div className="animate-pulse text-slate-700 font-mono">LOADING PREVIEW...</div>
          </div>
          <iframe 
            src={project.url} 
            className="absolute inset-0 w-full h-full z-10"
            title={project.name}
          />
          <div className="absolute inset-0 pointer-events-none border-2 border-white/5 rounded-3xl z-20" />
        </div>

        {/* Reflection Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 text-white">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-display font-bold">創作心得 / Reflection</h3>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare className="w-24 h-24" />
              </div>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10 italic">
                「{project.reflection}」
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-white">技術細節 / Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.type === 'game' ? (
                ['HTML5', 'CSS3', 'JavaScript', 'AI Assisted', 'Responsive'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm border border-white/5">
                    {tech}
                  </span>
                ))
              ) : (
                ['Monster Mash', '3D Rendering', 'Animation', 'WebXR Ready'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm border border-white/5">
                    {tech}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg glass p-8 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">重點提醒</h3>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  這個作品展示了我在 <span className="text-blue-400 font-bold">{project.type === 'game' ? '邏輯開發' : '視覺設計'}</span> 方面的進步。
                </p>
                <ul className="space-y-3 list-disc list-inside text-slate-400">
                  <li>核心技術：{project.type === 'game' ? 'JavaScript 邏輯與 AI 協作' : 'Monster Mash 3D 骨架綁定'}</li>
                  <li>主要挑戰：{project.type === 'game' ? '演算法優化與介面互動' : '動作流暢度與美感呈現'}</li>
                  <li>學習收穫：掌握了更高效的開發流程與工具應用</li>
                </ul>
              </div>
              
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
              >
                我知道了
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
