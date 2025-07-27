
'use server';
/**
 * @fileOverview Un asistente de IA para ayudar a los usuarios a superar bloqueos en las misiones.
 *
 * - getAssistantResponse - Una función que genera una respuesta de ayuda empática.
 * - AssistantInput - El tipo de entrada para la función del asistente.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistantInputSchema = z.object({
  missionTitle: z.string().describe('El título de la misión en la que el usuario está trabajando.'),
  userQuery: z
    .string()
    .describe(
      "La pregunta o el sentimiento del usuario sobre por qué está atascado o necesita ayuda."
    ),
});
export type AssistantInput = z.infer<typeof AssistantInputSchema>;

export async function getAssistantResponse(input: AssistantInput): Promise<string> {
  const assistantFlow = ai.defineFlow(
    {
      name: 'assistantFlow',
      inputSchema: AssistantInputSchema,
      outputSchema: z.string(),
    },
    async (input) => {
      const {text} = await ai.generate({
        prompt: `Sos un asistente empático y un coach motivacional llamado "CAMINO". Tu objetivo es ayudar a un joven que se siente trabado a superar un pequeño desafío. El tono debe ser cercano, comprensivo y nunca juzgar. Usá un lenguaje coloquial argentino.

      La misión actual del usuario es: "${input.missionTitle}"
      La consulta o sentimiento del usuario es: "${input.userQuery}"

      Tu tarea es responder de una manera que:
      1.  Valide sus sentimientos: Reconocé que lo que siente es normal y está bien.
      2.  Desdramatice la situación: Recordale que es un paso pequeño, no un examen.
      3.  Ofrezca una micro-sugerencia accionable: Dale una idea muy, muy pequeña para empezar, relacionada con su bloqueo.
      4.  Termine con una nota de aliento: Recordale que puede hacerlo y que no está solo.

      Ejemplo de respuesta:
      "¡Frená un poco! Es súper normal sentirse así. Que la cabeza se te llene de 'y si...' es un clásico. No estás solo en esto.
      
      ¿Qué te parece si probamos algo mínimo? Ni siquiera pienses en la misión entera. Solo concentrate en el primer, primerísimo paso. Si la misión es 'llamar a un lugar', el primer paso es solo encontrar el número de teléfono. Nada más.
      
      Acordate, esto no es una carrera. Es solo dar un pasito chiquito. Vos podés. ¡Acá estoy para bancarte!"`,
        config: {
          temperature: 0.7,
        }
      });
      return text;
    }
  );

  return await assistantFlow(input);
}
