
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Rocket, Check, Bot, Sparkles, Trophy, Coffee, Play, ArrowRight, CircleCheck, RefreshCw } from 'lucide-react';
import type { Mission, FeedbackEntry, MissionFeedbackData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { EmojiFeedback } from './EmojiFeedback';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';


interface MissionListProps {
  mission: Mission;
  onCompleteMission: (missionId: string) => void;
  onAdvanceToNextDay: () => void;
  onRest: () => void;
  onResume: () => void;
  onSaveFeedback: (feedback: Omit<FeedbackEntry, 'id' | 'date'>) => void;
  isMissionCompleted: boolean;
  allMissionsCompleted: boolean;
  userChoseToRest: boolean;
  currentDay: number;
}

export function MissionList({ mission, onCompleteMission, onAdvanceToNextDay, onRest, onResume, onSaveFeedback, isMissionCompleted, allMissionsCompleted, userChoseToRest, currentDay }: MissionListProps) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOpenModal = (mission: Mission) => {
    setSelectedMission(mission);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
  };

  const handleCompleteMission = (missionId: string) => {
    onCompleteMission(missionId);
    setShowFeedback(true);
  };
  
  const handleFeedback = (selectedFeeling: MissionFeedbackData['feeling']) => {
     onSaveFeedback({
        type: 'mission',
        data: {
          missionId: mission.id,
          feeling: selectedFeeling,
          reflection: '',
        },
      });
      setShowFeedback(false);
  }

  const renderContent = () => {
    if (allMissionsCompleted) {
      return (
        <div className="text-center p-8">
          <Trophy className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">¡Felicitaciones!</h3>
          <p className="text-lg text-muted-foreground mt-2">
            Completaste las 15 movidas fundamentales. Este es un gran logro. Tomate un momento para celebrar tu progreso.
          </p>
        </div>
      );
    }

    if (userChoseToRest) {
      return (
        <div className="text-center p-6 bg-card rounded-lg border">
            <Coffee className="mx-auto h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Descanso merecido.</h3>
            <p className="text-lg text-muted-foreground mt-2 mb-6">
              A veces, la mayor victoria es saber cuándo parar. <br/> Nos vemos la próxima.
            </p>
            <Button onClick={onResume} variant="outline" className="text-lg">
                <Play className="mr-2 h-4 w-4" />
                Volver a la acción
            </Button>
          </div>
      )
    }
    
    if (showFeedback && isMissionCompleted) {
       return <EmojiFeedback onFeedback={handleFeedback} />;
    }
    
    if (isMissionCompleted && !showFeedback) {
        return (
            <div className="text-center p-6 sm:p-8 bg-card rounded-lg border">
                <CircleCheck className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">¡Movida completada!</h3>
                <p className="text-lg text-muted-foreground mt-2 mb-6">
                  Hoy te hiciste cargo. Eso es lo que importa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={onAdvanceToNextDay} size="lg" className="text-lg group bg-accent hover:bg-accent/90 text-accent-foreground" disabled={allMissionsCompleted}>
                        Vamos con la siguiente
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button onClick={onRest} size="lg" variant="outline" className="text-lg">
                        Descanso por hoy
                    </Button>
                </div>
            </div>
        );
    }
    
    if (!mission) {
      return (
        <div className="text-center p-8">
            <p className="text-lg text-muted-foreground mt-2">
                Cargando acción...
            </p>
        </div>
      );
    }
    
    return (
      <TooltipProvider>
        <div className="space-y-6">
            <Card key={mission.id} className={'transition-all border-2 bg-card shadow-xl rounded-2xl'}>
              <CardHeader className="p-4 sm:p-6 pb-2">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="font-headline text-2xl sm:text-4xl font-bold text-foreground">{mission.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-1 px-4 sm:px-6 pb-4 pt-2">
                <p className="text-base sm:text-xl text-muted-foreground leading-snug">{mission.description}</p>
                
                {mission.type === 'interactive' && mission.steps && !mission.why && (
                  <div className="space-y-1 pt-2">
                    <ol className="list-decimal list-inside space-y-1 text-base sm:text-xl text-muted-foreground leading-snug">
                      {mission.steps.map((step, index) => (
                        <li key={index}>{step.title}</li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {mission.why && (
                    <div className="pt-3 mt-4 border-t">
                        <h4 className="py-2 font-bold text-foreground text-base sm:text-xl">¿Por qué esto ayuda?</h4>
                        <p className="text-base sm:text-lg text-muted-foreground leading-snug">{mission.why}</p>
                    </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-stretch gap-3 bg-foreground/5 py-4 px-4 sm:py-5 sm:px-6">
                <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={() => handleOpenModal(mission)} className="flex-1 group bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                    Ver cómo se hace
                    </Button>
                    <Button onClick={() => handleCompleteMission(mission.id)} className="flex-1 bg-green-600 text-white hover:bg-green-700 text-base">
                    Listo, un paso más
                    </Button>
                </div>
                
                <div className="flex justify-end items-center flex-wrap gap-2 mt-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" onClick={onRest} className="text-muted-foreground text-base">
                              Hoy paso, pero sigo en camino
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Podés retomarlo la próxima. No pasa nada.</p>
                        </TooltipContent>
                      </Tooltip>
                </div>
              </CardFooter>
            </Card>
        </div>
      </TooltipProvider>
    );
  };

  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardContent className="p-0">
        {renderContent()}
      </CardContent>
      {selectedMission && (
        <InteractiveGuideModal
          mission={selectedMission}
          isOpen={!!selectedMission}
          onClose={handleCloseModal}
          onComplete={() => {
            handleCompleteMission(selectedMission.id)
          }}
        />
      )}
    </Card>
  );
}
