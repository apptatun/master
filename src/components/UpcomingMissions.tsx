'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ListTodo, Trophy } from 'lucide-react';
import type { Mission } from '@/lib/types';

interface UpcomingMissionsProps {
  missions: Mission[];
}

export function UpcomingMissions({ missions }: UpcomingMissionsProps) {
  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-3xl">
          <ListTodo className="mr-3 h-7 w-7 text-accent/80" />
          Próximas Aventuras
        </CardTitle>
      </CardHeader>
      <CardContent>
         <p className="text-muted-foreground mb-6 text-lg">
            Estos son los siguientes pasos en tu camino. No tienes que pensar en ellos ahora, solo saber que la aventura continúa.
          </p>
        <Accordion type="single" collapsible className="w-full">
            {missions.map(mission => (
                <AccordionItem value={mission.id} key={mission.id}>
                    <AccordionTrigger className='text-xl font-bold text-foreground hover:no-underline'>
                        {mission.title}
                    </AccordionTrigger>
                    <AccordionContent className='pt-2'>
                        <p className='text-lg text-muted-foreground mb-4'>{mission.description}</p>
                        {mission.reward && (
                          <div className="flex items-center text-sm font-bold text-accent-foreground/80">
                            <Trophy className="mr-2 h-5 w-5 text-accent" />
                            Logro a Desbloquear: {mission.reward}
                          </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
