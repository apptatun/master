
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { ArrowLeft, ArrowRight, Sparkles, BrainCircuit, HeartPulse } from 'lucide-react';
import type { Mission, FeedbackEntry, MissionFeedbackData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { subCategoryMap } from '@/lib/types';
import useLocalStorage from '@/hooks/useLocalStorage';

// The first 3 days are fixed to build a foundation.
const fixedMissionPlan: string[] = [
    'm36',   // Día 1: Despertar con propósito
    'm3_v2', // Día 2: Limpieza "Espejo Líquido"
    'm43',   // Día 3: Rincón de conquista
];

const TOTAL_DAYS = 15;


export default function DashboardPage() {
  const router = useRouter();
  const [completedMissions, setCompletedMissions] = useLocalStorage<string[]>('completedMissions', []);
  const [currentDayIndex, setCurrentDayIndex] = useLocalStorage<number>('currentDayIndex', 0);
  const [restDate, setRestDate] = useLocalStorage<string | null>('restDate', null);
  const [feedbackHistory, setFeedbackHistory] = useLocalStorage<FeedbackEntry[]>('feedbackHistory', []);
  
  const [isMounted, setIsMounted] = useState(false);
  const [userChoseToRest, setUserChoseToRest] = useState(false);
  const [activeMissionId, setActiveMissionId] = useState<string | null>(null);
  const [isAdaptiveMode, setIsAdaptiveMode] = useState(false);
  const [dailyMissionPlan, setDailyMissionPlan] = useLocalStorage<string[]>('dailyMissionPlan', []);
  
  const [showRescueAlert, setShowRescueAlert] = useState(false);
  const [isRescueBoxOpen, setIsRescueBoxOpen] = useState(false);


  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    
    if (restDate) {
        const today = new Date().toISOString().split('T')[0];
        if (restDate < today) {
            setUserChoseToRest(false);
            setRestDate(null);
        } else {
            setUserChoseToRest(true);
        }
    }

    if (dailyMissionPlan.length < TOTAL_DAYS) {
        generateMissionPlan();
    }
    

  }, [completedMissions.length]);

  useEffect(() => {
    // This effect runs when the plan is generated or the user goal changes.
    if (dailyMissionPlan.length === TOTAL_DAYS && !activeMissionId) {
       setActiveMissionId(dailyMissionPlan[currentDayIndex]);
    }
  }, [dailyMissionPlan, currentDayIndex, activeMissionId]);


  const generateMissionPlan = () => {
    const userGoal = localStorage.getItem('userGoal');
    let newPlan = [...fixedMissionPlan];

    if (completedMissions.length >= fixedMissionPlan.length && !userGoal) {
        // Don't generate the rest of the plan until a goal is set.
        return;
    }

    if (userGoal) {
        let potentialMissions: Mission[];
        
        if (userGoal === 'general') {
            potentialMissions = missions.filter(m => 
                !newPlan.includes(m.id) && m.category !== 'generic'
            );
        } else {
            const goalCategories = subCategoryMap[userGoal as keyof typeof subCategoryMap];
            
            const goalSpecificMissions = missions.filter(m => 
                (goalCategories as string[]).includes(m.category) && 
                !newPlan.includes(m.id)
            );
            
            const otherMissions = missions.filter(m => 
                !(goalCategories as string[]).includes(m.category) &&
                !newPlan.includes(m.id) &&
                m.category !== 'generic'
            );

            potentialMissions = [...goalSpecificMissions, ...otherMissions];
        }
        
        const shuffledMissions = [...potentialMissions].sort(() => 0.5 - Math.random());
        
        const dynamicMissionIds = shuffledMissions
            .map(m => m.id)
            .slice(0, TOTAL_DAYS - newPlan.length);

        newPlan = [...newPlan, ...dynamicMissionIds];
    }
    
    // Fallback to fill up any remaining slots
    while (newPlan.length < TOTAL_DAYS) {
        const fallbackMission = missions.find(m => m.category === 'generic' && !newPlan.includes(m.id));
        if (fallbackMission) {
            newPlan.push(fallbackMission.id);
        } else {
            const anyOtherMission = missions.find(m => !newPlan.includes(m.id));
            if (anyOtherMission) {
                newPlan.push(anyOtherMission.id);
            } else {
                break; // No more missions to add
            }
        }
    }
    setDailyMissionPlan(newPlan);
  }

  useEffect(() => {
    if (dailyMissionPlan.length > 0) {
      const missionFeedback = feedbackHistory.filter(
        (f): f is Extract<FeedbackEntry, {type: 'mission'}> =>
          f.type === 'mission'
      );

      const lastThreeFeedbacks = missionFeedback.slice(-3);

      const getStressScore = (feeling: MissionFeedbackData['feeling']) => {
        switch (feeling) {
          case 'Mal':
            return 2;
          case 'Más o menos':
            return 1;
          case 'Un poco mejor':
            return 0;
          default:
            return 0;
        }
      };

      const totalStressScore = lastThreeFeedbacks.reduce(
        (sum, current) => sum + getStressScore(current.data.feeling),
        0
      );

      const needsIntervention =
        lastThreeFeedbacks.length >= 3 && totalStressScore >= 4;

      let currentPlanMissionId = dailyMissionPlan[currentDayIndex];
      const isCurrentAdaptive = dailyMissionPlan[currentDayIndex]?.startsWith('adaptive_');

      if (needsIntervention && !isAdaptiveMode && !isCurrentAdaptive) {
        setIsAdaptiveMode(true);
        const mentalMissions = missions.filter(
          m => m.category === 'laboratorio-mental'
        );
        let randomMission = mentalMissions.find(
          m =>
            !completedMissions.includes(m.id) && m.id !== currentPlanMissionId
        );
        if (!randomMission) {
          randomMission =
            mentalMissions[Math.floor(Math.random() * mentalMissions.length)];
        }
        if (randomMission) {
          const newPlan = [...dailyMissionPlan];
          // We add a special prefix to distinguish it, but the mission ID is still valid
          const adaptiveMissionId = `adaptive_${randomMission.id}`;
          newPlan.splice(currentDayIndex, 0, randomMission.id);
          // Don't add to total days, just insert it
          newPlan.pop(); 
          setDailyMissionPlan(newPlan);
          currentPlanMissionId = randomMission.id;
        }
      } else if (!needsIntervention && isAdaptiveMode) {
          setIsAdaptiveMode(false);
      }
      
      setActiveMissionId(currentPlanMissionId);
    }
  }, [currentDayIndex, feedbackHistory, dailyMissionPlan, setDailyMissionPlan]);


  const handleCompleteMission = (missionId: string) => {
    let newCompleted: string[];
    if (!completedMissions.includes(missionId)) {
        newCompleted = [...completedMissions, missionId];
        setCompletedMissions(newCompleted);
    } else {
        newCompleted = [...completedMissions];
    }
    
    const userHasCompletedFoundations = fixedMissionPlan.every(id => newCompleted.includes(id));
    const userGoal = localStorage.getItem('userGoal');

    if (userHasCompletedFoundations && !userGoal) {
        router.push('/setup');
        return;
    }

    setUserChoseToRest(false);
    setRestDate(null);
    setIsAdaptiveMode(false);
    setShowRescueAlert(false);

    const mission = missions.find(m => m.id === missionId);

    toast({
      title: (
        <div className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-accent" />
          <span className="font-bold text-lg">{mission?.reward ? 'Un paso más' : 'Un paso más'}</span>
        </div>
      ),
      description: <div className="text-base">{mission?.reward || 'Un día a la vez.'}</div>
    });
  };

  const handleSaveFeedback = (feedback: Omit<FeedbackEntry, 'id' | 'date'>) => {
    const newFeedback: FeedbackEntry = {
      ...feedback,
      id: new Date().toISOString() + Math.random(),
      date: new Date().toISOString(),
    };
    setFeedbackHistory([...feedbackHistory, newFeedback]);
    
    setShowRescueAlert(false);

    if (feedback.type === 'armory') {
        toast({
            title: 'Radar actualizado',
            description: 'Tu experiencia ha sido registrada en la bitácora. ¡Buen trabajo!',
        });
    }

    if (feedback.type === 'mission' && feedback.data.feeling === 'Mal') {
        setShowRescueAlert(true);
    }
  };
  
  const handleAdvanceToNextDay = () => {
    if (currentDayIndex < dailyMissionPlan.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
    setUserChoseToRest(false);
    setRestDate(null);
    setShowRescueAlert(false);
  };

  const handleNextDay = () => {
    if (currentDayIndex < dailyMissionPlan.length - 1) {
        setCurrentDayIndex(currentDayIndex + 1);
        setShowRescueAlert(false);
    }
  };

  const handlePreviousDay = () => {
    if (currentDayIndex > 0) {
        setCurrentDayIndex(currentDayIndex - 1);
        setShowRescueAlert(false);
    }
  };
  
  const handleRest = () => {
      const today = new Date().toISOString().split('T')[0];
      setUserChoseToRest(true);
      setRestDate(today);
  }

  const handleResume = () => {
    setUserChoseToRest(false);
    setRestDate(null);
  }
  
  const handleUseAlternative = (alternativeId: string) => {
     const newPlan = [...dailyMissionPlan];
     newPlan[currentDayIndex] = alternativeId;
     setDailyMissionPlan(newPlan);
     setActiveMissionId(alternativeId);

    toast({
        title: '¡Plan B activado!',
        description: 'A veces, la mejor estrategia es cambiar de táctica. ¡Vamos con esta!',
    });
  }

  const handleResetProgress = () => {
    setCompletedMissions([]);
    setCurrentDayIndex(0);
    setRestDate(null);
    setUserChoseToRest(false);
    setFeedbackHistory([]);
    setDailyMissionPlan([]);
    localStorage.removeItem('userGoal');
    localStorage.removeItem('dailyMissionPlan');
    localStorage.removeItem('hasSeenOnboarding');
    router.push('/');
  };
  
  useEffect(() => {
     const userGoal = localStorage.getItem('userGoal');
     if (completedMissions.length >= fixedMissionPlan.length && userGoal && dailyMissionPlan.length < TOTAL_DAYS) {
        generateMissionPlan();
     }
  }, [localStorage.getItem('userGoal')]);


  if (!isMounted || !activeMissionId) {
    return null;
  }
  
  const currentMission = missions.find(m => m.id === activeMissionId);
  const isCurrentMissionCompleted = completedMissions.includes(activeMissionId);
  
  const maxUnlockedDay = completedMissions.length;
  const canGoToNextDay = currentDayIndex < maxUnlockedDay;

  return (
    <div className="flex h-screen flex-col bg-background">
      <DashboardHeader 
        onResetProgress={handleResetProgress} 
        feedbackHistory={feedbackHistory} 
        missions={missions}
        onSaveFeedback={handleSaveFeedback}
      />
      <main className="flex-1 overflow-y-auto container mx-auto p-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-4 text-center">
            <div className="pt-2">
                 <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
                    <Button onClick={handlePreviousDay} variant="ghost" size="icon" disabled={currentDayIndex === 0}>
                        <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <h1 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground min-w-[200px] sm:min-w-[280px]">
                        Movida {currentDayIndex + 1}
                    </h1>
                    <Button onClick={handleNextDay} variant="ghost" size="icon" disabled={!canGoToNextDay || currentDayIndex >= dailyMissionPlan.length - 1}>
                        <ArrowRight className="h-6 w-6" />
                    </Button>
                </div>
                 <div className="flex justify-center items-center gap-2 mb-4">
                  {Array.from({ length: TOTAL_DAYS }).map((_, index) => {
                    const missionIdAtIndex = dailyMissionPlan[index];
                    const isCompleted = missionIdAtIndex ? completedMissions.includes(missionIdAtIndex) : false;
                    const isCurrent = index === currentDayIndex;
                    
                    return (
                      <div
                        key={`progress-${index}`}
                        className={cn(
                          'h-3 w-3 rounded-full transition-all',
                          isCompleted ? 'bg-accent' : 'bg-muted',
                          isCurrent && 'ring-2 ring-accent ring-offset-2 ring-offset-background'
                        )}
                      />
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground">{completedMissions.length} de {TOTAL_DAYS} movidas completadas</p>
            </div>
            
            {isAdaptiveMode && (
              <Alert variant="default" className="text-left bg-secondary border-secondary-foreground/20 max-w-2xl mx-auto">
                <BrainCircuit className="h-5 w-5" />
                <AlertDescription className="text-secondary-foreground">
                  Notamos que los últimos pasos fueron difíciles. Está bien. Hoy te proponemos algo más suave para recargar energías. Sin presión.
                </AlertDescription>
              </Alert>
            )}

            {showRescueAlert && (
                 <Alert variant="default" className="text-left bg-secondary border-secondary-foreground/20 max-w-2xl mx-auto">
                    <HeartPulse className="h-5 w-5" />
                    <AlertTitle className="font-bold">A veces, un paso atrás es parte del camino.</AlertTitle>
                    <AlertDescription className="text-secondary-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                      <p>Notamos que este paso fue difícil. No pasa nada. ¿Necesitas una herramienta rápida para volver a tu centro?</p>
                      <Button onClick={() => { setIsRescueBoxOpen(true); setShowRescueAlert(false); }} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0">
                        Abrir Caja de Rescate
                      </Button>
                    </AlertDescription>
                </Alert>
            )}

            <div className="border-t pt-4 sm:pt-8">
                 {currentMission ? (
                    <MissionList
                        mission={currentMission}
                        onCompleteMission={handleCompleteMission}
                        onAdvanceToNextDay={handleAdvanceToNextDay}
                        isCurrentMissionCompleted={isCurrentMissionCompleted}
                        onRest={onRest}
                        onUseAlternative={handleUseAlternative}
                        userChoseToRest={userChoseToRest}
                        onResume={handleResume}
                        onSaveFeedback={handleSaveFeedback}
                        allMissionsCompleted={completedMissions.length >= TOTAL_DAYS}
                        currentDay={currentDayIndex + 1}
                    />
                 ) : (
                    <p>No se encontró la acción para hoy.</p>
                 )}
            </div>
        </div>
      </main>
    </div>
  );
}
