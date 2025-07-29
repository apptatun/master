
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Home, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';

const goals = [
  {
    id: 'energy',
    icon: Zap,
    title: 'Mi energía y rutina',
    description: 'Para empezar a sentirte más activo, dormir mejor y romper la inercia del día a día.',
  },
  {
    id: 'space',
    icon: Home,
    title: 'El orden en mi espacio',
    description: 'Para tomar control de tu entorno, reducir el caos y crear un ambiente más tranquilo.',
  },
  {
    id: 'social',
    icon: Users,
    title: 'Animarme a conectar',
    description: 'Para dar pequeños pasos que te ayuden a interactuar con otros sin que se sienta una montaña.',
  }
];

export default function SetupPage() {
  const router = useRouter();

  useEffect(() => {
    // This check is a safeguard, but the primary logic is now in the dashboard.
    const completedMissions = JSON.parse(localStorage.getItem('completedMissions') || '[]');
    if (localStorage.getItem('userGoal') && completedMissions.length > 3) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleSelectGoal = (goalId: string) => {
    localStorage.setItem('userGoal', goalId);
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ¡Excelente comienzo! Ahora, calibremos tu brújula.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Has completado las 3 movidas fundamentales. Saber qué es lo más importante para vos ahora nos ayuda a personalizar el resto de tu viaje.
            </p>
          </motion.div>

          <motion.div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="flex flex-col h-full text-left hover:border-accent hover:shadow-xl transition-all cursor-pointer group" onClick={() => handleSelectGoal(goal.id)}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <goal.icon className="h-8 w-8 text-accent" />
                      <CardTitle className="font-headline text-2xl">{goal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground text-base">{goal.description}</p>
                    <div className="mt-6 flex items-center justify-end text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Empezar por acá</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
