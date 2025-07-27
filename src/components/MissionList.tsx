'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Sparkles, Gamepad2, PartyPopper } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

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
    <Card>
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
            <div className="space-y-4">
              {missions.map((mission) => {
                const isCompleted = completedMissions.includes(mission.id);
                return (
                  <div
                    key={mission.id}
                    className={cn(
                      'flex items-center justify-between rounded-lg border p-4 transition-all',
                      isCompleted ? 'bg-primary/30 border-primary/50' : 'bg-card'
                    )}
                  >
                    <div className="flex-grow space-y-1">
                       <label
                          htmlFor={mission.id}
                          className={cn(
                            'font-bold text-xl text-foreground',
                            isCompleted && 'line-through text-muted-foreground'
                          )}
                        >
                          {mission.title}
                        </label>
                        <p className={cn('text-lg text-muted-foreground', isCompleted && 'line-through')}>
                          {mission.description}
                        </p>
                    </div>

                    <div className="flex flex-col items-end space-y-2 ml-4">
                       <Badge variant="secondary" className="text-base px-3 py-1">
                          <Sparkles className="inline-block mr-1.5 h-4 w-4" />
                          {mission.points} Puntos
                       </Badge>
                       {mission.type === 'interactive' && !isCompleted && (
                        <Button onClick={() => handleOpenModal(mission)} size="sm" className="text-base px-4 py-2">
                          Iniciar Protocolo
                        </Button>
                      )}
                       {mission.type === 'checkbox' && (
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
                          className="h-7 w-7"
                        />
                       )}
                    </div>
                  </div>
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
