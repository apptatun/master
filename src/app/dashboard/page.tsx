'use client';

import { useState, useEffect } from 'react';
import { MissionList } from '@/components/MissionList';
import { Journal } from '@/components/Journal';
import { NamingAssistant } from '@/components/NamingAssistant';
import { Header } from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import { missions, titles } from '@/lib/missions';
import { Medal } from 'lucide-react';

export default function DashboardPage() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [points, setPoints] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedCompleted = localStorage.getItem('completedMissions');
    const savedPoints = localStorage.getItem('userPoints');
    const savedTitle = localStorage.getItem('userTitle');

    if (savedCompleted) {
      setCompletedMissions(JSON.parse(savedCompleted));
    }
    if (savedPoints) {
      setPoints(parseInt(savedPoints, 10));
    }
    if (savedTitle) {
      setCurrentTitle(savedTitle);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if(isMounted) {
        localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
        localStorage.setItem('userPoints', points.toString());
        localStorage.setItem('userTitle', currentTitle);
    }
  }, [completedMissions, points, currentTitle, isMounted]);

  const handleCompleteMission = (missionId: string, missionPoints: number, rewardTitle: string) => {
    if (completedMissions.includes(missionId)) return;

    const newCompleted = [...completedMissions, missionId];
    const newPoints = points + missionPoints;
    
    setCompletedMissions(newCompleted);
    setPoints(newPoints);

    const currentTitleIndex = titles.indexOf(currentTitle);
    const rewardTitleIndex = titles.indexOf(rewardTitle);
    
    let newTitle = currentTitle;
    if (rewardTitleIndex > currentTitleIndex) {
        newTitle = rewardTitle;
    }

    toast({
      title: '¡Misión Completada!',
      description: (
        <div className="flex flex-col text-base">
          <span>+{missionPoints} puntos!</span>
          {newTitle !== currentTitle && (
            <span className="font-bold mt-1">
              <Medal className="inline-block mr-1 h-5 w-5 text-accent" />
              Nuevo Título: {newTitle}
            </span>
          )}
        </div>
      ),
    });

    if (newTitle !== currentTitle) {
      setCurrentTitle(newTitle);
    }
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }
  
  const totalPossiblePoints = missions.reduce((sum, mission) => sum + mission.points, 0);

  const upcomingMissions = missions.filter(mission => !completedMissions.includes(mission.id));
  const nextMission = upcomingMissions.length > 0 ? [upcomingMissions[0]] : [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header title={currentTitle} points={points} totalPoints={totalPossiblePoints} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MissionList
              missions={nextMission}
              completedMissions={completedMissions}
              onCompleteMission={handleCompleteMission}
              allMissionsCompleted={upcomingMissions.length === 0}
            />
          </div>
          <div className="space-y-8">
            <Journal />
            <NamingAssistant />
          </div>
        </div>
      </main>
    </div>
  );
}
