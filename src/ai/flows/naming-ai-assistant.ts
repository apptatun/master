'use server';

/**
 * @fileOverview Naming AI Assistant flow.
 *
 * - generateNames - A function that generates names based on hints.
 * - NamingAIInput - The input type for the generateNames function.
 * - NamingAIOutput - The return type for the generateNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NamingAIInputSchema = z.object({
  hints: z
    .string()
    .describe('Hints for the names to be generated, separated by commas.'),
});
export type NamingAIInput = z.infer<typeof NamingAIInputSchema>;

const NamingAIOutputSchema = z.object({
  names: z
    .string()
    .array()
    .describe('An array of generated names based on the provided hints.'),
});
export type NamingAIOutput = z.infer<typeof NamingAIOutputSchema>;

export async function generateNames(input: NamingAIInput): Promise<NamingAIOutput> {
  return generateNamesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'namingAIPrompt',
  input: {schema: NamingAIInputSchema},
  output: {schema: NamingAIOutputSchema},
  prompt: `You are a creative naming assistant. Generate a list of names based on the following hints, respond with a JSON array:

Hints: {{{hints}}}`,
});

const generateNamesFlow = ai.defineFlow(
  {
    name: 'generateNamesFlow',
    inputSchema: NamingAIInputSchema,
    outputSchema: NamingAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
