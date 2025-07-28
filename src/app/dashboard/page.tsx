
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { Check } from 'lucide-react';
import type { Mission } from '@/lib/types';
import Confetti from 'react-confetti';

// For now, we define a fixed 15-day mission plan here.
// Later, this could be more dynamic.
const dailyMissionPlan: string[] = [
    'm36', // Día 1: Ritual de Inicio (5 min)
    'm6', // Día 2: Embajador de la Hidratación (1 min)
    'm3', // Día 3: Ninja del Fregadero (5 min)
    'm12', // Día 4: Guardián del Esmalte (3 min)
    'm7', // Día 5: Exploración Beta (5 min)
    'm8', // Día 6: PROTOCOLO SALUDO VOCAL
    'm13', // Día 7: Uniforme de Entrecasa (2 min)
    'm1', // Día 8: Misión: Activar la Hornalla (3 min)
    'm23', // Día 9: HACKEO FINANCIERO
    'm15', // Día 10: Reactivar Contacto (2 min)
    'm14', // Día 11: Foco de Orden (7 min)
    'm11', // Día 12: EXPEDICIÓN KIOSCO
    'm27', // Día 13: OPERACIÓN MURO DE LAMENTOS
    'm4', // Día 14: Misión: Lavarropas (5 min)
    'm28' // Día 15: OPERACIÓN PHOENIX
];


export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const [userChoseToRest, setUserChoseToRest] = useState(false);

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
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
        localStorage.setItem('currentDayIndex', currentDayIndex.toString());
    }
  }, [completedMissions, currentDayIndex, isMounted]);

  const handleCompleteMission = (missionId: string) => {
    if (completedMissions.includes(missionId)) return;

    const newCompleted = [...completedMissions, missionId];
    setCompletedMissions(newCompleted);
    setUserChoseToRest(false);

    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    toast({
      title: (
        <div className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span className="font-bold text-lg">Misión Completada</span>
        </div>
      ),
      description: <div className="text-base">Un paso a la vez.</div>
    });
  };
  
  const handleNextMission = () => {
    if (currentDayIndex < dailyMissionPlan.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
    setUserChoseToRest(false);
  };
  
  const handleRest = () => {
      setUserChoseToRest(true);
  }

  if (!isMounted) {
    return null;
  }
  
  const missionIdForToday = dailyMissionPlan[currentDayIndex];
  const currentMission = missions.find(m => m.id === missionIdForToday);
  const isCurrentMissionCompleted = currentMission ? completedMissions.includes(currentMission.id) : false;
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />}
      <DashboardHeader path={null}/>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <div className="space-y-6 text-center">
            <div>
                <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Día {currentDayIndex + 1} de 15 — Tu Misión
                </h1>
                <p className="mt-4 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto">
                    Cada día vas a tener UNA tarea simple. Si no te sale, no pasa nada: podés repetirla mañana o tomarte el tiempo que necesites. <br/>
                    <span className="font-bold text-foreground">Lo importante no es la velocidad, sino que sigas adelante.</span>
                </p>
            </div>
            <div className="border-t pt-8">
                <p className="text-2xl font-bold text-foreground mb-4">Hoy arrancamos con esto:</p>
                 {currentMission ? (
                    <MissionList
                        missions={[currentMission]}
                        completedMissions={completedMissions}
                        onCompleteMission={handleCompleteMission}
                        onNextMission={handleNextMission}
                        isCurrentMissionCompleted={isCurrentMissionCompleted}
                        onRest={handleRest}
                        userChoseToRest={userChoseToRest}
                        allMissionsCompleted={currentDayIndex >= dailyMissionPlan.length - 1 && isCurrentMissionCompleted}
                    />
                 ) : (
                    <p>No se encontró la misión para hoy.</p>
                 )}
            </div>
        </div>
      </main>
    </div>
  );
}
