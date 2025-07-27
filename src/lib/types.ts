export interface Step {
  title: string;
  description: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'checkbox' | 'interactive';
  category: 'cooking' | 'organizing' | 'social' | 'going-out' | 'generic';
  steps?: Step[];
}
