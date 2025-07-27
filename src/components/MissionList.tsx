'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveGuideModal } from './InteractiveGuideModal';
import { Gamepad2, PartyPopper, ArrowRight, Check, Rocket, SkipForward, MessageCircleQuestion, ClipboardCheck, ArrowLeft } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { useToast } from '@/hooks/use-toast';


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
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenModal = (mission: Mission) => {
    setSelectedMission(mission);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
  };

  const currentMissionForHelp = missions[0];
  const helpMessage = `Hola, ¿me podrías dar una mano con esto? Estoy intentando hacer algo nuevo y una ayuda me vendría genial. La misión es: "${currentMissionForHelp?.title}". ¡Gracias!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(helpMessage);
    toast({
      title: (
        <div className="flex items-center">
          <ClipboardCheck className="mr-2 h-5 w-5 text-accent" />
          <span className="font-bold text-lg">¡Mensaje Copiado!</span>
        </div>
      ),
      description: <div className="text-base">Ya podés pegarlo en tu app de mensajería.</div>
    });
    setIsHelpModalOpen(false);
  }

  const renderContent = () => {
    if (allMissionsCompleted) {
      return (
        <div className="text-center p-8">
          <PartyPopper className="mx-auto h-16 w-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-foreground">¡Felicitaciones!</h3>
          <p className="text-lg text-muted-foreground mt-2">
            Completaste todos los desafíos disponibles. ¡Tomate un momento para celebrar tu increíble progreso!
          </p>
           <Link href="/setup">
              <Button size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
                Elegir otro camino
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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
                <Button onClick={onNextMission} size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
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
            Completaste todos los desafíos disponibles. ¡Tomate un momento para celebrar tu increíble progreso!
          </p>
           <Link href="/setup">
              <Button size="lg" className="mt-6 text-lg group bg-accent hover:bg-accent/90 text-accent-foreground">
                Elegir otro camino
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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
                <CardFooter className="flex flex-col items-stretch gap-3 bg-background/50 py-4 px-6">
                    {mission.type === 'interactive' && !isCompleted && (
                    <Button onClick={() => handleOpenModal(mission)} size="lg" className="text-base px-4 py-6 group bg-accent text-accent-foreground hover:bg-accent/90">
                        Ver cómo se hace
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                    {mission.type === 'checkbox' && (
                      <Button onClick={() => onCompleteMission(mission.id)} size="lg" disabled={isCompleted} className="text-base px-4 py-6">
                         <Check className="mr-2 h-5 w-5" /> ¡Hecho!
                      </Button>
                    )}
                    {isCompleted && (
                      <div className="flex items-center justify-center space-x-2 text-lg font-bold text-green-600 p-4 rounded-md bg-green-500/10">
                        <Check className="h-6 w-6" />
                        <span>¡Superado!</span>
                      </div>
                    )}
                    {!isCompleted && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                             <Button variant="outline" onClick={() => setIsHelpModalOpen(true)}>
                                <MessageCircleQuestion className="mr-2 h-4 w-4"/>
                                Pedir Ayuda
                            </Button>
                            <Button variant="outline" onClick={onNextMission}>
                                Saltar por ahora
                                <SkipForward className="ml-2 h-4 w-4"/>
                            </Button>
                        </div>
                    )}
                     {canGoBack && !isCompleted && (
                         <Button variant="ghost" onClick={onPreviousMission} className="mt-2">
                            <ArrowLeft className="mr-2 h-4 w-4"/>
                            Anterior
                        </Button>
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
      <Dialog open={isHelpModalOpen} onOpenChange={setIsHelpModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle className="font-headline text-3xl">Pedir ayuda es un paso valiente</DialogTitle>
            <DialogDescription className="text-base pt-2 text-muted-foreground">
                A veces, lo más difícil es dar el primer paso. Copia este mensaje y envíalo a alguien de confianza. No estás solo.
            </DialogDescription>
            </DialogHeader>
            <div className="my-4 p-4 border rounded-lg bg-muted/50">
                <p className="text-base text-muted-foreground">{helpMessage}</p>
            </div>
            <DialogFooter>
            <Button onClick={copyToClipboard} className="w-full text-base bg-accent hover:bg-accent/90 text-accent-foreground">
                <ClipboardCheck className="mr-2 h-4 w-4" />
                Copiar Mensaje
            </Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
