
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { PartyPopper, ArrowRight, Check, Rocket, Compass, Bot, Trophy, Sparkles } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AiAssistantModal } from './AiAssistantModal';
import { EmojiFeedback } from './EmojiFeedback';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


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
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 4000); // Show feedback for 4 seconds
  };
  
  const handleDeclineMission = () => {
    setShowRejectionMessage(true);
  }
  
  const missionPath = typeof window !== 'undefined' ? localStorage.getItem('missionPath') : 'guarida';
  const currentMissionForReward = missions[0];

  const renderContent = () => {
    if (allMissionsCompleted) {
      return (
        <div className="text-center p-8">
          <PartyPopper className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-foreground">¡Felicitaciones!</h3>
          <p className="text-lg text-muted-foreground mt-2">
            Conquistaste todos los desafíos disponibles en este camino. ¡Tomate un momento para celebrar tu increíble progreso!
          </p>
           <Link href={`/path?mode=${missionPath}`}>
              <Button size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
                <Compass className="mr-2 h-5 w-5" />
                Explorar otros desafíos
              </Button>
            </Link>
        </div>
      );
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

    if (isCurrentMissionCompleted) {
        return (
             <div className="mt-8 text-center p-6 bg-card rounded-lg border">
                <Rocket className="mx-auto h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground">¡Muy bien hecho!</h3>
                {currentMissionForReward?.reward && (
                    <div className="flex items-center justify-center text-lg font-bold text-accent-foreground/80 pt-2 bg-accent/20 p-3 rounded-md my-4">
                      <Trophy className="mr-2 h-5 w-5 text-accent" />
                      <p>Logro Desbloqueado: <span className="font-extrabold">{currentMissionForReward.reward}</span></p>
                    </div>
                  )}
                <p className="text-lg text-muted-foreground mt-2">
                  Ya diste un gran paso hoy. Recordá, esto es a tu ritmo. <br/> 
                  Si te sentís con energía, podés ir por el siguiente. Si no, ¡lo de hoy ya es una victoria enorme!
                </p>
                <Button onClick={onNextMission} size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
                  Siguiente Misión
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
            Conquistaste todos los desafíos de esta categoría. ¡Tomate un momento para celebrar tu progreso!
          </p>
           <Link href={`/path?mode=${missionPath}`}>
              <Button size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
                 <Compass className="mr-2 h-5 w-5" />
                Ver otros desafíos
              </Button>
            </Link>
        </div>
      );
    }

    return (
      <TooltipProvider>
        <div className="space-y-6">
          {missions.map((mission) => {
            const isCompleted = completedMissions.includes(mission.id);
            return (
              <Card key={mission.id} className={cn('transition-all border-2 border-transparent')}>
                <CardHeader>
                  <p className="text-xl text-muted-foreground">🎯 Te sugerimos empezar por acá.</p>
                  <CardTitle className="font-headline text-4xl sm:text-5xl font-bold text-foreground pt-2 pb-4">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-6 pb-4">
                  {mission.type === 'checkbox' && mission.steps && (
                    <div className="space-y-3 text-lg text-muted-foreground">
                      <ol className="list-decimal list-inside space-y-2">
                        {mission.steps.map((step, index) => (
                          <li key={index}>{step.title}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {mission.type === 'interactive' && <p className="text-lg text-muted-foreground">{mission.description}</p>}
                  
                  {mission.why && (
                      <div className="pt-2">
                          <p className="font-bold text-foreground">¿Por qué esto?</p>
                          <p className="text-muted-foreground">{mission.why}</p>
                      </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-3 bg-background/50 py-4 px-6">
                    {isCompleted ? (
                      <div className="flex items-center justify-center space-x-2 text-lg font-bold text-green-600 p-4 rounded-md bg-green-500/10">
                        <Check className="h-6 w-6" />
                        <span>¡Conquistado!</span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 pt-2">
                         {mission.type === 'interactive' && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                               <Button onClick={() => handleOpenModal(mission)} size="lg" className="text-base px-4 py-6 group bg-accent text-accent-foreground hover:bg-accent/90">
                                  Ver cómo se hace
                                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Vas a ver una mini instrucción simple. Tranquilo, es rápido.</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {mission.type === 'checkbox' && (
                          <Button onClick={() => handleCompleteMission(mission.id)} size="lg" className="text-base px-4 py-6 bg-accent text-accent-foreground hover:bg-accent/90">
                            <Check className="mr-2 h-5 w-5" /> ¡Misión Conquistada!
                          </Button>
                        )}
                        <Button variant="outline" onClick={() => setIsAssistantModalOpen(true)}>
                            <Bot className="mr-2 h-4 w-4"/>
                            ¿Necesitás una mano?
                        </Button>
                        <Button variant="ghost" onClick={handleDeclineMission}>
                            ❌ No hoy, gracias
                        </Button>
                      </div>
                    )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </TooltipProvider>
    );
  };

  return (
    <Card className="bg-card/50">
      <CardContent className="p-4 sm:p-6">
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
      {missions.length > 0 && !allMissionsCompleted && (
         <AiAssistantModal
          missionTitle={missions[0]?.title}
          isOpen={isAssistantModalOpen}
          onClose={() => setIsAssistantModalOpen(false)}
        />
      )}
    </Card>
  );
}

