
export interface Step {
  title: string;
  description?: string;
}

export type Path = 'en-casa' | 'explorador';

export type SubCategory = 
  // En Casa
  | 'supervivencia-culinaria'
  | 'rescate-de-territorio'
  | 'dominio-digital'
  | 'finanzas-ninja'
  | 'laboratorio-mental'
  // Explorador
  | 'primeros-pasos'
  | 'interacciones-humanas'
  | 'misiones-oficiales'
  | 'preparacion-laboral'
  | 'aventuras-de-crecimiento';

export const subCategoryMap: Record<Path, SubCategory[]> = {
  'en-casa': [
    'rescate-de-territorio',
    'laboratorio-mental',
    'supervivencia-culinaria',
    'dominio-digital',
    'finanzas-ninja',
  ],
  explorador: [
    'primeros-pasos',
    'interacciones-humanas',
    'misiones-oficiales',
    'preparacion-laboral',
    'aventuras-de-crecimiento',
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
