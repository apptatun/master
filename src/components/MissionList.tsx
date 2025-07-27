'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Sparkles, Gamepad2, PartyPopper, ArrowRight } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface MissionListProps {
  missions: Mission[];
  completedMissions: string[];
  onCompleteMission: (missionId: string, points: number, rewardTitle: string) => void;
  allMissionsCompleted: boolean;
}

export function MissionList({ missions, completedMissions, onCompleteMission, allMissionsCompleted }: MissionListProps) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const handleOpenModal = (mission: Mission) => {
    setSelectedMission(mission);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
  };

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-4xl">
          <Gamepad2 className="mr-3 h-8 w-8 text-accent" />
          El Paso de Hoy
        </CardTitle>
      </CardHeader>
      <CardContent>
        {allMissionsCompleted ? (
          <div className="text-center p-8">
            <PartyPopper className="mx-auto h-16 w-16 text-accent mb-4" />
            <h3 className="text-2xl font-bold text-foreground">¡Felicitaciones!</h3>
            <p className="text-lg text-muted-foreground mt-2">
              Completaste todos los desafíos disponibles. ¡Tomate un momento para celebrar tu increíble progreso! Pronto habrá nuevos retos para vos.
            </p>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6 text-lg">
              Un paso a la vez. Concentrate en esto. Vos podés.
            </p>
            <div className="space-y-6">
              {missions.map((mission) => {
                const isCompleted = completedMissions.includes(mission.id);
                return (
                  <Card key={mission.id} className={cn('transition-all', isCompleted ? 'bg-primary/30 border-primary/50' : 'bg-card')}>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-foreground">{mission.title}</CardTitle>
                      <p className={cn('text-lg text-muted-foreground pt-1', isCompleted && 'line-through')}>
                        {mission.description}
                      </p>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between bg-background/50 py-3 px-6">
                       <Badge variant="secondary" className="text-lg font-bold px-4 py-1">
                          <Sparkles className="inline-block mr-2 h-5 w-5 text-accent" />
                          {mission.points} Puntos
                       </Badge>
                       {mission.type === 'interactive' && !isCompleted && (
                        <Button onClick={() => handleOpenModal(mission)} size="sm" className="text-base px-4 py-2 group">
                          Iniciar Protocolo
                           <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      )}
                       {mission.type === 'checkbox' && (
                         <div className="flex items-center space-x-2">
                           <label htmlFor={mission.id} className={cn("font-semibold text-lg", isCompleted ? "text-muted-foreground line-through" : "text-foreground")}>¡Hecho!</label>
                           <Checkbox
                            id={mission.id}
                            checked={isCompleted}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                onCompleteMission(mission.id, mission.points, mission.rewardTitle);
                              }
                            }}
                            disabled={isCompleted}
                            aria-label={`Marcar ${mission.title} como completada`}
                            className="h-8 w-8"
                          />
                         </div>
                       )}
                       {isCompleted && (
                          <div className="flex items-center space-x-2 text-lg font-bold text-green-600">
                             <span>¡Superado!</span>
                          </div>
                       )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </CardContent>
      {selectedMission && (
        <InteractiveGuideModal
          mission={selectedMission}
          isOpen={!!selectedMission}
          onClose={handleCloseModal}
          onComplete={onCompleteMission}
        />
      )}
    </Card>
  );
}
