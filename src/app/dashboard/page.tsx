
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { Check, ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import type { Mission } from '@/lib/types';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// For now, we define a fixed 15-day mission plan here.
// Later, this could be more dynamic.
const dailyMissionPlan: string[] = [
    'm36', // Día 1: Ritual de Inicio (3 tareas)
    'm3_v2',// Día 2: Lava 3 platos (con opciones)
    'm12', // Día 3: Cepíllate los dientes (3 min)
    'm6',  // Día 4: Bebe un vaso de agua (1 min)
    'm7',  // Día 5: Sal a la puerta (5 min)
    'm8',  // Día 6: Di "buen día" o "gracias"
    'm13', // Día 7: Ponte ropa limpia (2 min)
    'm1', // Día 8: Acción: Activar la Hornalla (3 min)
    'm23', // Día 9: Revisa tu saldo bancario
    'm15', // Día 10: Reactivar Contacto (2 min)
    'm14', // Día 11: Ordena un solo lugar (7 min)
    'm11', // Día 12: Compra algo en el kiosco
    'm27', // Día 13: Escribe una preocupación y rómpela
    'm4', // Día 14: Acción: Lavarropas (5 min)
    'm28' // Día 15: Reintenta una acción que te costó
];


export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const [userChoseToRest, setUserChoseToRest] = useState(false);
  const [restDate, setRestDate] = useState<string | null>(null);

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
      setCurrentDayIndex(parseInt(savedDayIndex, 10));
    } else {
        localStorage.setItem('completedMissions', '[]');
        localStorage.setItem('currentDayIndex', '0');
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
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
        localStorage.setItem('currentDayIndex', currentDayIndex.toString());
        if (restDate) {
            localStorage.setItem('restDate', restDate);
        } else {
            localStorage.removeItem('restDate');
        }
    }
  }, [completedMissions, currentDayIndex, restDate, isMounted]);

  const handleCompleteMission = (missionId: string) => {
    if (completedMissions.includes(missionId)) return;

    const newCompleted = [...completedMissions, missionId];
    setCompletedMissions(newCompleted);
    setUserChoseToRest(false);
    setRestDate(null);

    const mission = missions.find(m => m.id === missionId);
    
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    toast({
      title: (
        <div className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
          <span className="font-bold text-lg">{mission?.reward ? 'Logro Desbloqueado' : 'Un paso más'}</span>
        </div>
      ),
      description: <div className="text-base">{mission?.reward || 'Un día a la vez.'}</div>
    });
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

  if (!isMounted) {
    return null;
  }
  
  const missionIdForToday = dailyMissionPlan[currentDayIndex];
  const currentMission = missions.find(m => m.id === missionIdForToday);
  const isCurrentMissionCompleted = currentMission ? completedMissions.includes(currentMission.id) : false;
  
  // The user can go to the next day if the next day is within the range of completed actions, or it's the very next one.
  const maxUnlockedDay = completedMissions.length;
  const canGoToNextDay = currentDayIndex < maxUnlockedDay;
  
  const progressPercentage = (currentDayIndex / (dailyMissionPlan.length -1) ) * 100;


  return (
    <div className="flex min-h-screen flex-col bg-background">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />}
      <DashboardHeader />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <div className="space-y-4 text-center">
            <div>
                 <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
                    <Button onClick={handlePreviousDay} variant="ghost" size="icon" disabled={currentDayIndex === 0}>
                        <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <h1 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground min-w-[200px] sm:min-w-[280px]">
                        Día {currentDayIndex + 1} de {dailyMissionPlan.length}
                    </h1>
                    <Button onClick={handleNextDay} variant="ghost" size="icon" disabled={!canGoToNextDay || currentDayIndex >= dailyMissionPlan.length - 1}>
                        <ArrowRight className="h-6 w-6" />
                    </Button>
                </div>
                 <Progress value={progressPercentage} className="w-full max-w-sm mx-auto" />
            </div>
            <div className="border-t pt-8">
                 {currentMission ? (
                    <MissionList
                        missions={[currentMission]}
                        completedMissions={completedMissions}
                        onCompleteMission={handleCompleteMission}
                        onAdvanceToNextDay={handleAdvanceToNextDay}
                        isCurrentMissionCompleted={isCurrentMissionCompleted}
                        onRest={handleRest}
                        userChoseToRest={userChoseToRest}
                        onResume={handleResume}
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
