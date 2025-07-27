export interface Step {
  title: string;
  description: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'checkbox' | 'interactive';
  category: 
    | 'cooking' 
    | 'organizing' 
    | 'social' 
    | 'going-out' 
    | 'generic' 
    | 'personal-care'
    | 'minimal-organization'
    | 'emotional-management';
  steps?: Step[];
}

    
