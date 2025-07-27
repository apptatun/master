'use server';

import { generateNames, type NamingAIInput } from '@/ai/flows/naming-ai-assistant';

export async function getSuggestedNames(input: NamingAIInput) {
  try {
    const result = await generateNames(input);
    return result;
  } catch (error) {
    console.error('Error generating names:', error);
    // Return a default or error structure
    return { names: ['Error al generar nombres. Intenta de nuevo.'] };
  }
}
