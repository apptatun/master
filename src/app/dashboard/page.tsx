'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MissionList } from '@/components/MissionList';
import { Journal } from '@/components/Journal';
import { NamingAssistant } from '@/components/NamingAssistant';
import { Header } from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import { missions } from '@/lib/missions';
import { Check } from 'lucide-react';
import type { Mission } from '@/lib/types';

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

  if (!isMounted) {
    return null; // or a loading spinner
  }
  
  const upcomingMissions = userMissions.filter(mission => !completedMissions.includes(mission.id));
  const nextMission = upcomingMissions.length > 0 ? [upcomingMissions[0]] : [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header completedCount={completedMissions.length} />
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
