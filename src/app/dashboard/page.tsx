
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { Header } from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { Check } from 'lucide-react';
import type { Mission } from '@/lib/types';
import { UpcomingMissions } from '@/components/UpcomingMissions';

export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [userMissions, setUserMissions] = useState<Mission[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const savedCompleted = localStorage.getItem('completedMissions');
    const category = localStorage.getItem('missionCategory') as Mission['category'] | null;
    const savedIndex = localStorage.getItem('activeMissionIndex');

    if (!category) {
      router.push('/setup');
      return;
    }

    if (savedCompleted) {
      setCompletedMissions(JSON.parse(savedCompleted));
    }
     if (savedIndex) {
      setActiveMissionIndex(parseInt(savedIndex, 10));
    }
    
    const filteredMissions = missions.filter(
      (mission) => mission.category === category || mission.category === 'generic'
    );
    setUserMissions(filteredMissions);

    setIsMounted(true);
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

    toast({
      title: (
        <div className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span className="font-bold text-lg">¡Victoria Desbloqueada!</span>
        </div>
      ),
      description: <div className="text-base">¡Seguí así! Cada paso es un triunfo.</div>
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
  const remainingMissions = upcomingMissions.slice(activeMissionIndex + 1);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
            <MissionList
              missions={currentMission}
              completedMissions={completedMissions}
              onCompleteMission={handleCompleteMission}
              onNextMission={handleNextMission}
              onPreviousMission={handlePreviousMission}
              isCurrentMissionCompleted={isCurrentMissionCompleted}
              allMissionsCompleted={upcomingMissions.length === 0}
              canGoBack={activeMissionIndex > 0}
            />
            {remainingMissions.length > 0 && (
              <UpcomingMissions missions={remainingMissions} />
            )}
        </div>
      </main>
    </div>
  );
}
