
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Gamepad2, PartyPopper, ArrowRight, Check, Rocket, Compass, Bot } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AiAssistantModal } from './AiAssistantModal';
import { EmojiFeedback } from './EmojiFeedback';


interface MissionListProps {
  missions: Mission[];
  completedMissions: string[];
  onCompleteMission: (missionId: string) => void;
  onNextMission: () => void;
  onPreviousMission: () => void;
  isCurrentMissionCompleted: boolean;
  allMissionsCompleted: boolean;
  canGoBack: boolean;
}

export function MissionList({ missions, completedMissions, onCompleteMission, onNextMission, onPreviousMission, isCurrentMissionCompleted, allMissionsCompleted, canGoBack }: MissionListProps) {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [isAssistantModalOpen, setIsAssistantModalOpen] = useState(false);
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
    setTimeout(() => {
      setShowFeedback(false);
    }, 4000); // Show feedback for 4 seconds
  };
  
  const missionPath = typeof window !== 'undefined' ? localStorage.getItem('missionPath') : 'guarida';

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

    if (isCurrentMissionCompleted) {
        return (
             <div className="mt-8 text-center p-6 bg-card rounded-lg border">
                <Rocket className="mx-auto h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground">¡Muy bien hecho!</h3>
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
      <>
        <div className="text-center mb-6">
            <p className="text-xl text-muted-foreground">Te sugerimos empezar por acá. Un paso a la vez.</p>
            <p className="font-bold text-2xl text-foreground">Concentrate solo en esto. Vos podés.</p>
        </div>
        <div className="space-y-6">
          {missions.map((mission) => {
            const isCompleted = completedMissions.includes(mission.id);
            return (
              <Card key={mission.id} className={cn('transition-all border-2', isCompleted ? 'border-green-500/50 bg-green-500/5' : 'border-transparent')}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">{mission.title}</CardTitle>
                  <p className={cn('text-lg text-muted-foreground pt-1')}>
                    {mission.description}
                  </p>
                   {mission.reward && (
                    <div className="flex items-center text-sm font-bold text-accent-foreground/80 pt-2">
                      <Trophy className="mr-2 h-5 w-5 text-accent" />
                      Logro Desbloqueado: {mission.reward}
                    </div>
                  )}
                </CardHeader>
                <CardFooter className="flex flex-col items-stretch gap-3 bg-background/50 py-4 px-6">
                    {isCompleted ? (
                      <div className="flex items-center justify-center space-x-2 text-lg font-bold text-green-600 p-4 rounded-md bg-green-500/10">
                        <Check className="h-6 w-6" />
                        <span>¡Conquistado!</span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 pt-2">
                         {mission.type === 'interactive' && (
                           <Button onClick={() => handleOpenModal(mission)} size="lg" className="text-base px-4 py-6 group bg-accent text-accent-foreground hover:bg-accent/90">
                              Ver cómo se hace
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        )}
                        {mission.type === 'checkbox' && (
                          <Button onClick={() => handleCompleteMission(mission.id)} size="lg" className="text-base px-4 py-6">
                            <Check className="mr-2 h-5 w-5" /> ¡Misión Conquistada!
                          </Button>
                        )}
                        <Button variant="outline" onClick={() => setIsAssistantModalOpen(true)}>
                            <Bot className="mr-2 h-4 w-4"/>
                            ¿Necesitás una mano?
                        </Button>
                        <Button variant="ghost" onClick={onNextMission}>
                            Saltar por ahora
                        </Button>
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
          Tu Próximo Paso
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
