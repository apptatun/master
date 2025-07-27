
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { Check } from 'lucide-react';
import type { Mission, Path } from '@/lib/types';
import Confetti from 'react-confetti';
import { subCategoryMap } from '@/lib/types';

export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [userMissions, setUserMissions] = useState<Mission[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const [currentPath, setCurrentPath] = useState<Path | null>(null);

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const savedCompleted = localStorage.getItem('completedMissions');
    if (savedCompleted) {
      setCompletedMissions(JSON.parse(savedCompleted));
    }
    
    const savedIndex = localStorage.getItem('activeMissionIndex');
    if (savedIndex) {
      setActiveMissionIndex(parseInt(savedIndex, 10));
    }
    
    const missionCategory = localStorage.getItem('missionCategory');
    const missionPath = localStorage.getItem('missionPath') as Path | null;
    
    if (!missionCategory && !missionPath) {
      router.push('/setup');
      return;
    }

    let filteredMissions: Mission[] = [];
    
    if (missionCategory) {
      // Priority to specific subcategory selected from /path
      filteredMissions = missions.filter(m => m.category === missionCategory);
      const pathForCategory = Object.keys(subCategoryMap).find(path => 
        subCategoryMap[path as Path].includes(missionCategory as any)
      ) as Path | undefined;
      setCurrentPath(pathForCategory || null);
    } else if (missionPath) {
      // Fallback to the general path selected from /setup
      const categoriesForPath = subCategoryMap[missionPath];
      filteredMissions = missions.filter(m => categoriesForPath.includes(m.category as any));
      setCurrentPath(missionPath);
    }
    
    if (filteredMissions.length === 0) {
      // Ultimate fallback to generic
      filteredMissions = missions.filter(m => m.category === 'generic');
    }

    setUserMissions(filteredMissions);

  }, [router]);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
        localStorage.setItem('activeMissionIndex', activeMissionIndex.toString());
    }
  }, [completedMissions, activeMissionIndex, isMounted]);

  const handleCompleteMission = (missionId: string) => {
    if (completedMissions.includes(missionId)) return;

    const newCompleted = [...completedMissions, missionId];
    setCompletedMissions(newCompleted);

    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti for 5 seconds

    toast({
      title: (
        <div className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span className="font-bold text-lg">¡Desafío Superado!</span>
        </div>
      ),
      description: <div className="text-base">¡Seguí así! Un paso a la vez.</div>
    });
  };
  
  const handleNextMission = () => {
    const upcomingMissions = userMissions.filter(mission => !completedMissions.includes(mission.id));
    if(activeMissionIndex < upcomingMissions.length -1) {
       setActiveMissionIndex(activeMissionIndex + 1);
    }
  };
  
  const handlePreviousMission = () => {
    if(activeMissionIndex > 0) {
      setActiveMissionIndex(activeMissionIndex - 1);
    }
  }

  if (!isMounted) {
    return null; // or a loading spinner
  }
  
  const upcomingMissions = userMissions.filter(mission => !completedMissions.includes(mission.id));
  const currentMission = upcomingMissions.length > activeMissionIndex ? [upcomingMissions[activeMissionIndex]] : [];
  const isCurrentMissionCompleted = currentMission.length > 0 && completedMissions.includes(currentMission[0].id);
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />}
      <DashboardHeader path={currentPath}/>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
            <MissionList
              missions={currentMission}
              completedMissions={completedMissions}
              onCompleteMission={handleCompleteMission}
              onNextMission={handleNextMission}
              isCurrentMissionCompleted={isCurrentMissionCompleted}
              allMissionsCompleted={upcomingMissions.length === 0}
            />
        </div>
      </main>
    </div>
  );
}
