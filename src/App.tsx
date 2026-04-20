/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Project } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectView from './components/ProjectView';
import IntroOverlay from './components/IntroOverlay';

const PROJECTS: Project[] = [
  {
    id: 'minesweeper',
    title: '網頁遊戲1',
    name: '踩地雷',
    url: 'https://y11201079-eng.github.io/mine',
    type: 'game',
    reflection: '我覺得用AI做網頁小遊戲真的非常方便，之前還要慢慢地打程式碼根除錯，現在不用了，我只需要把我的想法跟AI說，他就會依照我的想法生成出我要做的東西！'
  },
  {
    id: 'melody-3d',
    title: '3D作品集A',
    name: '企鵝貓咪',
    description: '一隻在電臀的美樂蒂',
    url: 'https://y11201079-eng.github.io/work/3D/',
    type: '3d',
    reflection: '這個作品是使用monster mash完成的，因為我很喜歡美樂蒂，我發現玩弄它的尾巴很可愛。'
  }
];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('welcome');
  
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
      <IntroOverlay 
        isVisible={showIntro} 
        onComplete={() => setShowIntro(false)} 
      />
      
      {!showIntro && (
        <>
          <Header />
          
          <div className="flex flex-1 relative">
            <Sidebar 
              projects={PROJECTS} 
              selectedId={selectedProjectId} 
              onSelect={setSelectedProjectId} 
            />
            
            <main className="flex-1 flex flex-col min-h-0">
              <ProjectView project={selectedProject} />
            </main>
          </div>
          
          {/* Decorative elements */}
          <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-50 z-50" />
        </>
      )}
    </div>
  );
}

