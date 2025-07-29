
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
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { FeedbackEntry, Mission } from '@/lib/types';
import { Trophy } from 'lucide-react';


interface BitacoraDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feedbackHistory: FeedbackEntry[];
  missions: Mission[];
}

const missionFeelingMap: { [key: string]: { emoji: string; color: string } } = {
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
  
  const missionHistory = sortedHistory.filter((e): e is Extract<FeedbackEntry, { type: 'mission' }> => e.type === 'mission');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-3">
             <Trophy className="h-8 w-8 text-accent" />
            <div>
              <DialogTitle className="font-headline text-2xl sm:text-3xl">Mi Diario de Movidas</DialogTitle>
              <DialogDescription className="text-base pt-1">
                Tu registro de cada paso dado. Un recordatorio de tu progreso.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 min-h-0 overflow-y-auto my-4 pr-4 -mr-4">
            <div className="space-y-4">
                {missionHistory.length > 0 ? missionHistory.map((entry) => {
                    const feelingInfo = missionFeelingMap[entry.data.feeling] || { emoji: '🤔', color: 'bg-gray-200 text-gray-900' };
                    return (
                        <div key={entry.id} className="p-4 border rounded-lg bg-background/50 text-left flex items-start gap-4">
                            <span className="text-2xl mt-1">{feelingInfo.emoji}</span>
                            <div className='flex-grow'>
                                <p className="font-bold text-foreground text-lg">{getMissionTitle(entry.data.missionId)}</p>
                                <p className="text-sm text-muted-foreground">
                                    {format(new Date(entry.date), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                                </p>
                            </div>
                            <Badge variant="outline" className={`font-bold text-sm ${feelingInfo.color}`}>
                                {entry.data.feeling}
                            </Badge>
                        </div>
                    )
                }) : (
                    <div className="text-center text-muted-foreground py-10">
                        <p>Aún no hay movidas en tu bitácora.</p>
                        <p>¡Completa tu primera movida para empezar a escribir tu historia!</p>
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
