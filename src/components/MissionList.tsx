
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Rocket, Check, Bot, Sparkles, Trophy, Coffee, Play, ArrowRight } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import { AiAssistantModal } from './AiAssistantModal';
import { EmojiFeedback } from './EmojiFeedback';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


interface MissionListProps {
  missions: Mission[];
  completedMissions: string[];
  onCompleteMission: (missionId: string) => void;
  onNextMission: () => void;
  onRest: () => void;
  onResume: () => void;
  isCurrentMissionCompleted: boolean;
  allMissionsCompleted: boolean;
  userChoseToRest: boolean;
  currentDay: number;
}

export function MissionList({ missions, completedMissions, onCompleteMission, onNextMission, onRest, onResume, isCurrentMissionCompleted, allMissionsCompleted, userChoseToRest, currentDay }: MissionListProps) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [isAssistantModalOpen, setIsAssistantModalOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRejectionMessage, setShowRejectionMessage] = useState(false);

  const handleOpenModal = (mission: Mission) => {
    setSelectedMission(mission);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
  };

  const handleCompleteMission = (missionId: string) => {
    onCompleteMission(missionId);
  };
  
  const handleDeclineMission = () => {
    setShowRejectionMessage(true);
  }
  
  const renderContent = () => {
    if (allMissionsCompleted) {
      return (
        <div className="text-center p-8">
          <Trophy className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-foreground">¡Felicitaciones!</h3>
          <p className="text-lg text-muted-foreground mt-2">
            ¡Conquistaste el desafío de 15 días! Este es un logro inmenso. Tomate un momento para celebrar todo tu increíble progreso.
          </p>
        </div>
      );
    }

    if (userChoseToRest) {
      return (
        <div className="text-center p-6 bg-card rounded-lg border">
            <Coffee className="mx-auto h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold text-foreground">Descanso merecido.</h3>
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
    
    if (showFeedback) {
      return <EmojiFeedback onFeedback={() => setShowFeedback(false)} />;
    }

    if (showRejectionMessage) {
        return (
             <div className="text-center p-6 bg-card rounded-lg border">
                <Sparkles className="mx-auto h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground">Está bien.</h3>
                <p className="text-lg text-muted-foreground mt-2">
                 A veces decir que no también es avanzar. <br/> Volvé cuando te sientas con ganas.
                </p>
              </div>
        )
    }
    
    const mission = missions[0];
    if (!mission) {
      return (
        <div className="text-center p-8">
            <p className="text-lg text-muted-foreground mt-2">
                Cargando acción...
            </p>
        </div>
      );
    }
    
    if (isCurrentMissionCompleted) {
        return (
             <div className="mt-8 text-center p-6 bg-card rounded-lg border">
                <Rocket className="mx-auto h-12 w-12 text-accent mb-4" />
                <p className="text-xl text-muted-foreground mt-2 mb-6">
                  Listo. Ya está hecho. Te vemos mañana para la siguiente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={onNextMission} size="lg" className="text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
                        Ir al Día {currentDay + 1}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button onClick={onRest} size="lg" variant="outline" className="text-lg">
                        Por hoy es suficiente
                    </Button>
                </div>
              </div>
        )
    }

    return (
      <TooltipProvider>
        <div className="space-y-6">
            <Card key={mission.id} className={cn('transition-all border-2 border-transparent bg-card shadow-xl rounded-2xl')}>
              <CardHeader>
                <CardTitle className="font-headline text-4xl sm:text-5xl font-bold text-foreground pt-2 pb-4">{mission.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-4">
                <p className="text-xl text-muted-foreground">{mission.description}</p>
                
                {mission.type === 'checkbox' && mission.steps && (
                  <div className="space-y-3 pt-4">
                    <ol className="list-decimal list-inside space-y-2 text-xl text-muted-foreground">
                      {mission.steps.map((step, index) => (
                        <li key={index}>{step.title}</li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {mission.why && (
                    <div className="pt-4 mt-4 border-t">
                        <p className="font-bold text-foreground text-xl">¿Por qué esto?</p>
                        <p className="text-lg text-muted-foreground">{mission.why}</p>
                    </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-stretch gap-4 bg-foreground/5 py-5 px-6">
                  {mission.type === 'interactive' && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                         <Button onClick={() => handleOpenModal(mission)} size="lg" className="w-full text-lg px-4 py-6 group bg-accent text-accent-foreground hover:bg-accent/90">
                            Ver cómo se hace
                         </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Vas a ver una mini instrucción simple. Tranquilo, es rápido.</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {mission.type === 'checkbox' && (
                    <Button onClick={() => handleCompleteMission(mission.id)} size="lg" className="w-full text-lg px-4 py-6 bg-accent text-accent-foreground hover:bg-accent/90">
                      <Check className="mr-2 h-5 w-5" /> ¡Acción Conquistada!
                    </Button>
                  )}
                  
                  <div className="flex justify-between items-center gap-4 mt-2">
                      <Button variant="ghost" onClick={() => setIsAssistantModalOpen(true)} className="text-muted-foreground text-base">
                          <Bot className="mr-2 h-4 w-4"/>
                          Necesito una mano
                      </Button>
                       <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" onClick={handleDeclineMission} className="text-muted-foreground text-base">
                                No hoy, gracias
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Podés retomarlo mañana. No pasa nada.</p>
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
      {missions.length > 0 && !isCurrentMissionCompleted && !allMissionsCompleted && (
         <AiAssistantModal
          missionTitle={missions[0]?.title}
          isOpen={isAssistantModalOpen}
          onClose={() => setIsAssistantModalOpen(false)}
        />
      )}
    </Card>
  );
}
