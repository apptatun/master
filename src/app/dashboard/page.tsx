'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { NamingAssistant } from '@/components/NamingAssistant';
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
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const savedCompleted = localStorage.getItem('completedMissions');
    const category = localStorage.getItem('missionCategory') as Mission['category'] | null;

    if (!category) {
      router.push('/setup');
      return;
    }

    if (savedCompleted) {
      setCompletedMissions(JSON.parse(savedCompleted));
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
    }
  }, [completedMissions, isMounted]);

  const handleCompleteMission = (missionId: string) => {
    if (completedMissions.includes(missionId)) return;

    const newCompleted = [...completedMissions, missionId];
    setCompletedMissions(newCompleted);

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

  const handleAddMission = (title: string, description: string) => {
    const newMission: Mission = {
        id: `custom-${new Date().getTime()}`,
        title,
        description,
        points: 10,
        type: 'checkbox',
        category: 'generic'
    };
    setUserMissions(prevMissions => [newMission, ...prevMissions]);
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }
  
  const upcomingMissions = userMissions.filter(mission => !completedMissions.includes(mission.id));
  const nextMission = upcomingMissions.length > 0 ? [upcomingMissions[0]] : [];
  const remainingMissions = upcomingMissions.slice(1);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header completedCount={completedMissions.length} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <MissionList
              missions={nextMission}
              completedMissions={completedMissions}
              onCompleteMission={handleCompleteMission}
              allMissionsCompleted={upcomingMissions.length === 0}
            />
            {remainingMissions.length > 0 && (
              <UpcomingMissions missions={remainingMissions} />
            )}
          </div>
          <div className="space-y-8">
            <NamingAssistant onAddMission={handleAddMission} />
          </div>
        </div>
      </main>
    </div>
  );
}
