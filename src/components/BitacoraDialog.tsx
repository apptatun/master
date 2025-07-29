
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { FeedbackEntry, Mission } from '@/lib/types';

interface BitacoraDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feedbackHistory: FeedbackEntry[];
  missions: Mission[];
}

const feelingMap: { [key: string]: { emoji: string; color: string } } = {
    'Mal': { emoji: '😞', color: 'bg-red-200 text-red-900' },
    'Más o menos': { emoji: '😐', color: 'bg-yellow-200 text-yellow-900' },
    'Un poco mejor': { emoji: '😊', color: 'bg-green-200 text-green-900' },
}

export function BitacoraDialog({ isOpen, onClose, feedbackHistory, missions }: BitacoraDialogProps) {

  const getMissionTitle = (missionId: string) => {
    const mission = missions.find(m => m.id === missionId);
    return mission ? mission.title : 'Misión Desconocida';
  }
  
  const sortedHistory = [...feedbackHistory].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl">Mi Bitácora de Victorias</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Este es tu registro personal. Un recordatorio de cada paso que has dado. Cada entrada es una prueba de tu esfuerzo y tu progreso, sin importar el resultado.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 min-h-0 overflow-y-auto my-4 pr-4 -mr-4">
            <div className="space-y-4">
                {sortedHistory.length > 0 ? sortedHistory.map((entry, index) => {
                    const feelingInfo = feelingMap[entry.feeling] || { emoji: '🤔', color: 'bg-gray-200 text-gray-900' };
                    return (
                        <div key={index} className="p-4 border rounded-lg bg-background/50 text-left flex items-start gap-4">
                            <span className="text-2xl mt-1">{feelingInfo.emoji}</span>
                            <div className='flex-grow'>
                                <p className="font-bold text-foreground text-lg">{getMissionTitle(entry.missionId)}</p>
                                <p className="text-sm text-muted-foreground">
                                    {format(new Date(entry.date), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                                </p>
                            </div>
                            <Badge variant="outline" className={`font-bold text-sm ${feelingInfo.color}`}>
                                {entry.feeling}
                            </Badge>
                        </div>
                    )
                }) : (
                    <div className="text-center text-muted-foreground py-10">
                        <p>Aún no hay entradas en tu bitácora.</p>
                        <p>¡Completa tu primera misión para empezar a escribir tu historia!</p>
                    </div>
                )}
            </div>
        </div>

        <DialogFooter className="mt-auto pt-4 border-t">
          <Button onClick={onClose} className="w-full sm:w-auto">Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
