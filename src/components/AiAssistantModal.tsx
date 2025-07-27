
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Loader, Send } from 'lucide-react';
import { getAiAssistantResponse } from '@/app/actions';

interface AiAssistantModalProps {
  missionTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function AiAssistantModal({
  missionTitle,
  isOpen,
  onClose,
}: AiAssistantModalProps) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query) return;
    setIsLoading(true);
    setResponse('');
    try {
      const res = await getAiAssistantResponse(missionTitle, query);
      setResponse(res);
    } catch (error) {
      setResponse('Hubo un error al contactar al asistente. Por favor, intentá de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClose = () => {
    // Reset state on close
    setQuery('');
    setResponse('');
    setIsLoading(false);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[525px] bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl flex items-center">
            <Bot className="mr-3 h-8 w-8 text-accent" />
            Tu Asistente de Misión
          </DialogTitle>
          <DialogDescription className="text-base pt-2 text-muted-foreground">
            A veces, lo más difícil es dar el primer paso. Contame qué te está trabando o cómo te sentís. No estás solo en esto.
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4 flex-grow space-y-4 overflow-y-auto px-1">
            <div className="space-y-2">
                <label htmlFor="user-query" className="font-bold text-foreground">Tu consulta:</label>
                <Textarea
                    id="user-query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ej: No sé cómo empezar, me da ansiedad hablar con gente, ¿qué pasa si me sale mal?"
                    className="h-32"
                    disabled={isLoading}
                />
            </div>

            {isLoading && (
                <div className="flex items-center justify-center space-x-2 py-4">
                    <Loader className="h-6 w-6 animate-spin text-accent" />
                    <p className="text-muted-foreground">Tu asistente está pensando...</p>
                </div>
            )}

            {response && (
                <div className="p-4 border rounded-lg bg-muted/50 space-y-2">
                    <p className="font-bold text-foreground">Respuesta del Asistente:</p>
                    <p className="text-base text-muted-foreground whitespace-pre-line">{response}</p>
                </div>
            )}
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit} className="w-full text-base bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading || !query}>
            <Send className="mr-2 h-4 w-4" />
            {isLoading ? 'Enviando...' : 'Enviar Consulta'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
