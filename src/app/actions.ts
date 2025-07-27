'use server';

import { getAssistantResponse } from '@/ai/flows/assistant-flow';

export async function getAiAssistantResponse(missionTitle: string, userQuery: string) {
    return await getAssistantResponse({ missionTitle, userQuery });
}
