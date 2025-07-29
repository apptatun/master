
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { Check, ArrowLeft, ArrowRight, Trophy, Sparkles } from 'lucide-react';
import type { Mission, FeedbackEntry } from '@/lib/types';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// For now, we define a fixed 15-day mission plan here.
// Later, this could be more dynamic.
const dailyMissionPlan: string[] = [
    'm36',   // Día 1: PROTOCOLO "DESPERTAR CON PROPÓSITO"
    'm3_v2', // Día 2: OPERACIÓN "ESPEJO LÍQUIDO"
    'm43',   // Día 3: OPERACIÓN "RINCÓN DE CONQUISTA"
    'm4',    // Día 4: OPERACIÓN LAVARROPAS
    'm39',   // Día 5: Guardián de la Vestimenta (20 min)
    'm26',   // Día 6: Ejercicio de Anclaje 5-4-3-2-1
    'm13',   // Día 7: Ponte ropa limpia (2 min)
    'm1',    // Día 8: OPERACIÓN HORNALLA
    'm23',   // Día 9: Revisa tu saldo bancario
    'm15',   // Día 10: Reactivar Contacto (2 min)
    'm14',   // Día 11: Ordena un solo lugar (7 min)
    'm11',   // Día 12: Compra algo en el kiosco
    'm27',   // Día 13: Escribe una preocupación y rómpela
    'm38',   // Día 14: Piloto de Abastecimiento (15 min)
    'm28'    // Día 15: Reintenta una acción que te costó
];


export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const [userChoseToRest, setUserChoseToRest] = useState(false);
  const [restDate, setRestDate] = useState<string | null>(null);
  const [activeMissionId, setActiveMissionId] = useState<string | null>(null);
  const [feedbackHistory, setFeedbackHistory] = useState<FeedbackEntry[]>([]);


  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const savedCompleted = localStorage.getItem('completedMissions');
    if (savedCompleted) {
      setCompletedMissions(JSON.parse(savedCompleted));
    }
    
    const savedDayIndex = localStorage.getItem('currentDayIndex');
    if (savedDayIndex) {
      const dayIndex = parseInt(savedDayIndex, 10);
      setCurrentDayIndex(dayIndex);
      setActiveMissionId(dailyMissionPlan[dayIndex]);
    } else {
        localStorage.setItem('completedMissions', '[]');
        localStorage.setItem('currentDayIndex', '0');
        setActiveMissionId(dailyMissionPlan[0]);
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
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
    }
  }, [completedMissions, isMounted]);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('currentDayIndex', currentDayIndex.toString());
        setActiveMissionId(dailyMissionPlan[currentDayIndex]);
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
    if (completedMissions.includes(missionId)) return;

    const originalMissionIdForDay = dailyMissionPlan[currentDayIndex];
    if (!completedMissions.includes(originalMissionIdForDay)) {
        const newCompleted = [...completedMissions, originalMissionIdForDay];
        setCompletedMissions(newCompleted);
    }
    
    setUserChoseToRest(false);
    setRestDate(null);

    const mission = missions.find(m => m.id === missionId);
    
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    toast({
      title: (
        <div className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-accent" />
          <span className="font-bold text-lg">{mission?.reward ? '¡Bien hecho!' : 'Un paso más'}</span>
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
  const isCurrentMissionCompleted = completedMissions.includes(originalMissionIdForDay);
  
  const maxUnlockedDay = completedMissions.length;
  const canGoToNextDay = currentDayIndex < maxUnlockedDay;

  return (
    <div className="flex h-screen flex-col bg-background">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />}
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
                    <Button onClick={handleNextDay} variant="ghost" size="icon" disabled={!canGoToNextDay || currentDayIndex >= dailyMissionPlan.length - 1}>
                        <ArrowRight className="h-6 w-6" />
                    </Button>
                </div>
                 <div className="flex justify-center items-center gap-2 mb-4">
                  {dailyMissionPlan.map((missionId, index) => {
                    const isCompleted = completedMissions.includes(missionId);
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
            </div>
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
                        allMissionsCompleted={currentDayIndex >= dailyMissionPlan.length - 1 && isCurrentMissionCompleted}
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

