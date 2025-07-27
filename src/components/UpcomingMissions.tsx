
'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ListTodo, Trophy, Compass, ArrowRight } from 'lucide-react';
import type { Mission, Path } from '@/lib/types';
import { Button } from './ui/button';
import Link from 'next/link';

interface UpcomingMissionsProps {
  missions: Mission[];
  currentPath: Path | null;
}

export function UpcomingMissions({ missions, currentPath }: UpcomingMissionsProps) {
  if (missions.length === 0) {
    return null;
  }
  const nextMission = missions[0];

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-3xl">
          <ListTodo className="mr-3 h-7 w-7 text-accent/80" />
          Próxima Aventura Sugerida
        </CardTitle>
      </CardHeader>
      <CardContent>
         <p className="text-muted-foreground mb-6 text-lg">
           Cuando te sientas listo, este podría ser tu siguiente paso. Sin apuro.
         </p>
        <div className="p-4 border rounded-lg bg-background/50 space-y-3">
          <h4 className='text-xl font-bold text-foreground'>{nextMission.title}</h4>
          <p className='text-lg text-muted-foreground'>{nextMission.description}</p>
          {nextMission.reward && (
            <div className="flex items-center text-sm font-bold text-accent-foreground/80">
              <Trophy className="mr-2 h-5 w-5 text-accent" />
              Logro a Desbloquear: {nextMission.reward}
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <p className="text-muted-foreground text-base flex-grow">¿No te convence? No pasa nada.</p>
           {currentPath && (
             <Link href={`/path?mode=${currentPath}`}>
                <Button variant="outline">
                    <Compass className="mr-2 h-4 w-4" />
                    Ver otras opciones
                </Button>
            </Link>
           )}
        </div>
      </CardContent>
    </Card>
  );
}
