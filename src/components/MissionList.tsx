'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Sparkles, Gamepad2, PartyPopper, ArrowRight, Check, Rocket } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

interface MissionListProps {
  missions: Mission[];
  completedMissions: string[];
  onCompleteMission: (missionId: string) => void;
  onNextMission: () => void;
  isCurrentMissionCompleted: boolean;
  allMissionsCompleted: boolean;
}

export function MissionList({ missions, completedMissions, onCompleteMission, onNextMission, isCurrentMissionCompleted, allMissionsCompleted }: MissionListProps) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const handleOpenModal = (mission: Mission) => {
    setSelectedMission(mission);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
  };

  const renderContent = () => {
    if (allMissionsCompleted) {
      return (
        <div className="text-center p-8">
          <PartyPopper className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-foreground">¡Felicitaciones!</h3>
          <p className="text-lg text-muted-foreground mt-2">
            Completaste todos los desafíos disponibles. ¡Tomate un momento para celebrar tu increíble progreso! Pronto habrá nuevos retos para vos.
          </p>
        </div>
      );
    }

    if (isCurrentMissionCompleted) {
        return (
             <div className="mt-8 text-center p-6 bg-card rounded-lg border">
                <Rocket className="mx-auto h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground">¡Muy bien hecho!</h3>
                <p className="text-lg text-muted-foreground mt-2">
                  Ya diste un gran paso hoy. Recordá, esto es a tu ritmo. <br/> 
                  Si te sentís con energía, podés ir por el siguiente. Si no, ¡lo de hoy ya es una victoria enorme!
                </p>
                <Button onClick={onNextMission} size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90">
                  Siguiente Desafío
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
        )
    }
    
    if (missions.length === 0 && !allMissionsCompleted) {
        return (
        <div className="text-center p-8">
          <PartyPopper className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-foreground">¡Felicitaciones!</h3>
          <p className="text-lg text-muted-foreground mt-2">
            Completaste todos los desafíos disponibles. ¡Tomate un momento para celebrar tu increíble progreso! Pronto habrá nuevos retos para vos.
          </p>
        </div>
      );
    }

    return (
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
                  <p className={cn('text-lg text-muted-foreground pt-1')}>
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
                      Iniciar Guía
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
                            onCompleteMission(mission.id);
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
                        <Check className="h-6 w-6" />
                        <span>¡Superado!</span>
                      </div>
                    )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </>
    );
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
        {renderContent()}
      </CardContent>
      {selectedMission && (
        <InteractiveGuideModal
          mission={selectedMission}
          isOpen={!!selectedMission}
          onClose={handleCloseModal}
          onComplete={() => onCompleteMission(selectedMission.id)}
        />
      )}
    </Card>
  );
}
