'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Sparkles, Gamepad2 } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';

interface MissionListProps {
  missions: Mission[];
  completedMissions: string[];
  onCompleteMission: (missionId: string, points: number, rewardTitle: string) => void;
}

export function MissionList({ missions, completedMissions, onCompleteMission }: MissionListProps) {
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
        <CardTitle className="flex items-center font-headline text-2xl">
          <Gamepad2 className="mr-2 h-6 w-6 text-accent" />
          Misiones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Empecemos con algo chico. Cada misión completada te da puntos y te
          acerca a tu próximo título.
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
                      className="mt-1"
                    />
                  )}
                  <div className="space-y-1">
                    <label
                      htmlFor={mission.id}
                      className={cn(
                        'font-bold text-foreground',
                        isCompleted && 'line-through text-muted-foreground'
                      )}
                    >
                      {mission.title}
                    </label>
                    <p className={cn('text-sm text-muted-foreground', isCompleted && 'line-through')}>
                      {mission.description}
                    </p>
                    <p className="text-sm font-bold text-accent">
                      <Sparkles className="inline-block mr-1 h-4 w-4" />
                      {mission.points} Puntos
                    </p>
                  </div>
                </div>
                {mission.type === 'interactive' && !isCompleted && (
                  <Button onClick={() => handleOpenModal(mission)} size="sm">
                    Ver Pasos
                  </Button>
                )}
              </div>
            );
          })}
        </div>
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
