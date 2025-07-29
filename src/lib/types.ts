
export interface Step {
  title: string;
  description?: string;
}

export type Goal = 'energy' | 'space' | 'social';

export type SubCategory = 
  // 'energy' goal
  | 'laboratorio-mental'
  | 'supervivencia-culinaria'
  // 'space' goal
  | 'rescate-de-territorio'
  // 'social' goal
  | 'primeros-pasos'
  | 'interacciones-humanas'
  | 'dominio-digital'
  | 'finanzas-ninja'
  | 'aventuras-de-crecimiento';

export const subCategoryMap: Record<Goal, SubCategory[]> = {
  'energy': [
    'laboratorio-mental',
    'supervivencia-culinaria',
  ],
  'space': [
    'rescate-de-territorio',
  ],
  'social': [
    'primeros-pasos',
    'interacciones-humanas',
    'dominio-digital',
    'finanzas-ninja',
    'aventuras-de-crecimiento'
  ]
};

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'checkbox' | 'interactive';
  category: 
    // Legacy categories - to be phased out
    | 'cooking' 
    | 'organizing' 
    | 'social' 
    | 'going-out' 
    | 'generic' 
    | 'personal-care'
    | 'minimal-organization'
    | 'emotional-management'
    | 'digital'
    | 'advanced'
    | 'financial'
    | 'career'
    | 'physical-wellbeing'
    // New structure
    | SubCategory;
  steps?: Step[];
  why?: string;
  reward?: string;
  alternativeMissionId?: string;
}

export interface FeedbackEntry {
  missionId: string;
  feeling: string;
  date: string;
}

export interface ArmoryFeedbackEntry {
  quote: string;
  feeling: string;
  date: string;
}
    