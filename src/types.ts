export interface Project {
  id: string;
  title: string;
  name: string;
  description?: string;
  url: string;
  reflection: string;
  type: 'game' | '3d' | 'welcome';
}
