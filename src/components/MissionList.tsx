'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Sparkles, Gamepad2, PartyPopper } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';

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
          Tu Próximo Desafío
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
                    <div className="flex items-start space-x-4">
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
                          className="mt-1 h-6 w-6"
                        />
                      )}
                      <div className="space-y-1">
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
                        <p className="text-lg font-bold text-accent pt-1">
                          <Sparkles className="inline-block mr-1 h-5 w-5" />
                          {mission.points} Puntos
                        </p>
                      </div>
                    </div>
                    {mission.type === 'interactive' && !isCompleted && (
                      <Button onClick={() => handleOpenModal(mission)} size="sm" className="text-base px-4 py-2 self-center ml-4">
                        Iniciar Protocolo
                      </Button>
                    )}
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
