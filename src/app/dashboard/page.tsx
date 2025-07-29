
'use client';

import { useState, useEffect } from 'react';
import { MissionList } from '@/components/MissionList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { ArrowLeft, ArrowRight, Sparkles, BrainCircuit } from 'lucide-react';
import type { Mission, FeedbackEntry, SubCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { subCategoryMap } from '@/lib/types';

// The first 3 days are fixed to build a foundation.
const fixedMissionPlan: string[] = [
    'm36',   // Día 1: Despertar con propósito
    'm3_v2', // Día 2: Limpieza "Espejo Líquido"
    'm43',   // Día 3: Rincón de conquista
];

const TOTAL_DAYS = 15;


export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [userChoseToRest, setUserChoseToRest] = useState(false);
  const [restDate, setRestDate] = useState<string | null>(null);
  const [activeMissionId, setActiveMissionId] = useState<string | null>(null);
  const [feedbackHistory, setFeedbackHistory] = useState<FeedbackEntry[]>([]);
  const [isAdaptiveMode, setIsAdaptiveMode] = useState(false);
  const [dailyMissionPlan, setDailyMissionPlan] = useState<string[]>(fixedMissionPlan);


  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    let initialDayIndex = 0;

    const savedCompleted = localStorage.getItem('completedMissions');
    if (savedCompleted) {
      setCompletedMissions(JSON.parse(savedCompleted));
    }
    
    const savedDayIndex = localStorage.getItem('currentDayIndex');
    if (savedDayIndex) {
      initialDayIndex = parseInt(savedDayIndex, 10);
      setCurrentDayIndex(initialDayIndex);
    } 

    const savedRestDate = localStorage.getItem('restDate');
    if (savedRestDate) {
        const today = new Date().toISOString().split('T')[0];
        if (savedRestDate < today) {
            setUserChoseToRest(false);
            localStorage.removeItem('restDate');
            setRestDate(null);
        } else {
            setUserChoseToRest(true);
            setRestDate(savedRestDate);
        }
    }

    const savedFeedback = localStorage.getItem('feedbackHistory');
    if (savedFeedback) {
        setFeedbackHistory(JSON.parse(savedFeedback));
    }

    // Generate the dynamic part of the plan
    const userGoal = localStorage.getItem('userGoal') || 'energy';
    const goalCategories = subCategoryMap[userGoal as keyof typeof subCategoryMap];
    
    const potentialMissions = missions.filter(m => 
        (goalCategories as string[]).includes(m.category) && 
        !fixedMissionPlan.includes(m.id)
    );

    // Simple randomization, can be improved later.
    const shuffledMissions = [...potentialMissions].sort(() => 0.5 - Math.random());
    
    const dynamicMissionIds = shuffledMissions
        .map(m => m.id)
        .slice(0, TOTAL_DAYS - fixedMissionPlan.length);

    const fullPlan = [...fixedMissionPlan, ...dynamicMissionIds];
    
    // Ensure we have a fallback if missions run out
    while (fullPlan.length < TOTAL_DAYS) {
        fullPlan.push('g1'); // Fallback mission
    }
    
    setDailyMissionPlan(fullPlan);

    // Set initial active mission based on the generated plan
    if (fullPlan[initialDayIndex]) {
        setActiveMissionId(fullPlan[initialDayIndex]);
    } else {
        // Handle case where plan is not yet generated or index is out of bounds
        setActiveMissionId(fixedMissionPlan[0]);
    }

  }, []);

  useEffect(() => {
    if (isMounted) {
        // Adaptive Mode Logic
        const lastTwoFeedbacks = feedbackHistory.slice(-2);
        const needsIntervention = lastTwoFeedbacks.length === 2 && lastTwoFeedbacks.every(f => f.feeling === 'Mal');

        if (needsIntervention) {
            setIsAdaptiveMode(true);
            const mentalMissions = missions.filter(m => m.category === 'laboratorio-mental');
            // Find a mental mission not already completed
            let randomMission = mentalMissions.find(m => !completedMissions.includes(m.id));
            if (!randomMission) { // if all are completed, just pick one
                 randomMission = mentalMissions[Math.floor(Math.random() * mentalMissions.length)];
            }
            setActiveMissionId(randomMission.id);
        } else {
            setIsAdaptiveMode(false);
            setActiveMissionId(dailyMissionPlan[currentDayIndex]);
        }
    }
  }, [currentDayIndex, feedbackHistory, isMounted, dailyMissionPlan, completedMissions]);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
    }
  }, [completedMissions, isMounted]);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('currentDayIndex', currentDayIndex.toString());
    }
  }, [currentDayIndex, isMounted]);

  useEffect(() => {
    if(isMounted) {
        if (restDate) {
            localStorage.setItem('restDate', restDate);
        } else {
            localStorage.removeItem('restDate');
        }
    }
  }, [restDate, isMounted]);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('feedbackHistory', JSON.stringify(feedbackHistory));
    }
  }, [feedbackHistory, isMounted]);


  const handleCompleteMission = (missionId: string) => {
    // We always mark the *original* mission for the day as complete
    // to advance progress, even if an adaptive one was shown.
    const originalMissionIdForDay = dailyMissionPlan[currentDayIndex];
    if (originalMissionIdForDay && !completedMissions.includes(originalMissionIdForDay)) {
        const newCompleted = [...completedMissions, originalMissionIdForDay];
        setCompletedMissions(newCompleted);
    }
    
    setUserChoseToRest(false);
    setRestDate(null);
    setIsAdaptiveMode(false); // Reset adaptive mode after completion

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

  const handleSaveFeedback = (missionId: string, feeling: string) => {
    const newFeedback: FeedbackEntry = {
        missionId,
        feeling,
        date: new Date().toISOString(),
    };
    setFeedbackHistory([...feedbackHistory, newFeedback]);
  };
  
  const handleAdvanceToNextDay = () => {
    if (currentDayIndex < dailyMissionPlan.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
    setUserChoseToRest(false);
    setRestDate(null);
  };

  const handleNextDay = () => {
    if (currentDayIndex < dailyMissionPlan.length - 1) {
        setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const handlePreviousDay = () => {
    if (currentDayIndex > 0) {
        setCurrentDayIndex(currentDayIndex - 1);
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
    setActiveMissionId(dailyMissionPlan[0]);
    setFeedbackHistory([]);
    localStorage.removeItem('completedMissions');
    localStorage.removeItem('currentDayIndex');
    localStorage.removeItem('restDate');
    localStorage.removeItem('feedbackHistory');
    localStorage.removeItem('userGoal');
    toast({
      title: 'Progreso Reiniciado',
      description: 'Has vuelto al Día 1. ¡Una nueva oportunidad para empezar!',
    });
  };

  if (!isMounted || !activeMissionId) {
    return null;
  }
  
  const originalMissionIdForDay = dailyMissionPlan[currentDayIndex];
  const currentMission = missions.find(m => m.id === activeMissionId);
  const isCurrentMissionCompleted = originalMissionIdForDay ? completedMissions.includes(originalMissionIdForDay) : false;
  
  const maxUnlockedDay = completedMissions.length;
  const canGoToNextDay = currentDayIndex < maxUnlockedDay;

  return (
    <div className="flex h-screen flex-col bg-background">
      <DashboardHeader onResetProgress={handleResetProgress} />
      <main className="flex-1 overflow-y-auto container mx-auto p-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-4 text-center">
            <div className="pt-2">
                 <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
                    <Button onClick={handlePreviousDay} variant="ghost" size="icon" disabled={currentDayIndex === 0}>
                        <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <h1 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground min-w-[200px] sm:min-w-[280px]">
                        Día {currentDayIndex + 1}
                    </h1>
                    <Button onClick={handleNextDay} variant="ghost" size="icon" disabled={!canGoToNextDay || currentDayIndex >= TOTAL_DAYS - 1}>
                        <ArrowRight className="h-6 w-6" />
                    </Button>
                </div>
                 <div className="flex justify-center items-center gap-2 mb-4">
                  {Array.from({ length: TOTAL_DAYS }).map((_, index) => {
                    const originalMissionId = dailyMissionPlan[index];
                    const isOriginalCompleted = originalMissionId ? completedMissions.includes(originalMissionId) : false;
                    const isCurrent = index === currentDayIndex;
                    return (
                      <div
                        key={`progress-${index}`}
                        className={cn(
                          'h-3 w-3 rounded-full transition-all',
                          isOriginalCompleted ? 'bg-accent' : 'bg-muted',
                          isCurrent && 'ring-2 ring-accent ring-offset-2 ring-offset-background'
                        )}
                      />
                    );
                  })}
                </div>
            </div>
            
            {isAdaptiveMode && (
              <Alert variant="default" className="text-left bg-secondary border-secondary-foreground/20 max-w-2xl mx-auto">
                <BrainCircuit className="h-5 w-5" />
                <AlertDescription className="text-secondary-foreground">
                  Notamos que los últimos pasos fueron difíciles. Está bien. Hoy te proponemos algo más suave para recargar energías. Sin presión.
                </AlertDescription>
              </Alert>
            )}

            <div className="border-t pt-4 sm:pt-8">
                 {currentMission ? (
                    <MissionList
                        mission={currentMission}
                        completedMissions={completedMissions}
                        onCompleteMission={handleCompleteMission}
                        onAdvanceToNextDay={handleAdvanceToNextDay}
                        isCurrentMissionCompleted={isCurrentMissionCompleted}
                        onRest={handleRest}
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

    