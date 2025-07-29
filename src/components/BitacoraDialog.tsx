
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
import type { FeedbackEntry, Mission, ArmoryFeedbackEntry } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Trophy, Quote } from 'lucide-react';


interface BitacoraDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feedbackHistory: FeedbackEntry[];
  missions: Mission[];
  armoryFeedback: ArmoryFeedbackEntry[];
}

const missionFeelingMap: { [key: string]: { emoji: string; color: string } } = {
    'Mal': { emoji: '😞', color: 'bg-red-200 text-red-900' },
    'Más o menos': { emoji: '😐', color: 'bg-yellow-200 text-yellow-900' },
    'Un poco mejor': { emoji: '😊', color: 'bg-green-200 text-green-900' },
}

const armoryFeelingMap: { [key: string]: { color: string } } = {
    'Poderoso/a': { color: 'bg-blue-200 text-blue-900' },
    'Aliviado/a': { color: 'bg-green-200 text-green-900' },
    'Seguro/a': { color: 'bg-indigo-200 text-indigo-900' },
    'Igual': { color: 'bg-gray-200 text-gray-900' },
    'Frustrado/a': { color: 'bg-red-200 text-red-900' },
};

export function BitacoraDialog({ isOpen, onClose, feedbackHistory, missions, armoryFeedback }: BitacoraDialogProps) {

  const getMissionTitle = (missionId: string) => {
    const mission = missions.find(m => m.id === missionId);
    return mission ? mission.title : 'Misión Desconocida';
  }
  
  const sortedHistory = [...feedbackHistory].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const sortedArmoryHistory = [...armoryFeedback].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl">Mi Bitácora</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Este es tu registro personal. Un recordatorio de cada paso que has dado, tanto en tus misiones como en tus interacciones.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="missions" className="w-full flex-grow flex flex-col min-h-0 pt-2">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="missions">
                    <Trophy className="mr-2 h-4 w-4" />
                    Mis Victorias
                </TabsTrigger>
                <TabsTrigger value="armory">
                    <Shield className="mr-2 h-4 w-4" />
                    Radar Emocional
                </TabsTrigger>
            </TabsList>
            
            <div className="flex-1 min-h-0 overflow-y-auto my-4 pr-4 -mr-4">
                <TabsContent value="missions" className="h-full mt-0">
                    <div className="space-y-4">
                        {sortedHistory.length > 0 ? sortedHistory.map((entry, index) => {
                            const feelingInfo = missionFeelingMap[entry.feeling] || { emoji: '🤔', color: 'bg-gray-200 text-gray-900' };
                            return (
                                <div key={`mission-${index}`} className="p-4 border rounded-lg bg-background/50 text-left flex items-start gap-4">
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
                </TabsContent>

                <TabsContent value="armory" className="h-full mt-0">
                     <div className="space-y-4">
                        {sortedArmoryHistory.length > 0 ? sortedArmoryHistory.map((entry, index) => {
                            const feelingInfo = armoryFeelingMap[entry.feeling] || { color: 'bg-gray-200 text-gray-900' };
                            return (
                                <div key={`armory-${index}`} className="p-4 border rounded-lg bg-background/50 text-left flex flex-col gap-2">
                                    <div className="flex items-start gap-3">
                                        <Quote className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                                        <p className="font-bold text-foreground text-base flex-grow">"{entry.quote}"</p>
                                    </div>
                                    <div className="flex items-center justify-between pl-8">
                                        <p className="text-sm text-muted-foreground">
                                            {format(new Date(entry.date), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                                        </p>
                                         <Badge variant="outline" className={`font-bold text-sm ${feelingInfo.color}`}>
                                            Me sentí: {entry.feeling}
                                        </Badge>
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className="text-center text-muted-foreground py-10">
                                <p>Tu radar emocional está esperando datos.</p>
                                <p>Usa una respuesta de la Armería y registra cómo te sentiste para empezar a ver tus patrones.</p>
                            </div>
                        )}
                    </div>
                </TabsContent>
            </div>
        </Tabs>

        <DialogFooter className="mt-auto pt-4 border-t">
          <Button onClick={onClose} className="w-full sm:w-auto">Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
