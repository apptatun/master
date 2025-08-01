
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    
    // If user has seen onboarding, they should go to the dashboard.
    // The dashboard will handle the logic of where they are in the journey.
    if (hasSeenOnboarding) {
      router.replace('/dashboard');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleStart = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    router.push('/dashboard');
  };

  if (loading) {
    return (
       <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
         <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center h-full min-h-[50vh] px-4 sm:px-8">
            <Skeleton className="h-12 w-48" />
            <Skeleton className="h-6 w-full max-w-lg mt-4" />
            <Skeleton className="h-6 w-full max-w-md mt-2" />
            <Skeleton className="h-14 w-64 rounded-full mt-10" />
         </div>
       </div>
    )
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
       <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          <CarouselItem>
            <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center h-full min-h-[50vh] px-4 sm:px-8">
              <div className="space-y-4">
                 <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  ¿Te sentís en pausa?
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl pt-2">
                  Puede que el mundo avance rápido y vos estés sintiendo que te quedaste atrás. Quizás te cuesta arrancar, no sabés qué hacer con tu vida, o sentís ansiedad al pensar en el futuro.
                </p>
                <p className="text-lg text-foreground font-bold md:text-xl pt-2">
                  No sos un vago. No sos un inútil. Solo estás trabado, y eso le pasa a muchísimos jóvenes. A veces, el mundo espera que volemos sin darnos tiempo a desplegar las alas.
                </p>
              </div>
               <div className="pt-10 flex justify-center items-center text-muted-foreground">
                  <ArrowRight className="h-5 w-5 animate-pulse" />
                  <p className="text-sm ml-2">Desliza para continuar</p>
               </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center h-full min-h-[50vh] px-4 sm:px-8">
              <div className="space-y-4 text-left">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                  15 movidas que cambian tu pulso.
                </h2>
                <p className="text-base text-muted-foreground md:text-lg text-center">
                  Esto no es un plan de 15 días, es una secuencia de "movidas" —victorias simples— para que vuelvas a sentirte capaz y en control.
                </p>

                <ul className="space-y-3 text-base text-foreground md:text-lg max-w-2xl mx-auto pt-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Romper la inercia y empezar a hacer algo significativo.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Mejorar tu energía y bienestar, incluyendo tu sueño.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Completar UNA cosa por día que te haga sentir orgulloso.</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Pasar del "no sé por dónde empezar" al "estoy haciendo algo".</span>
                  </li>
                </ul>
              </div>
               <div className="pt-6 flex justify-center items-center text-muted-foreground">
                  <ArrowRight className="h-5 w-5 animate-pulse" />
                  <p className="text-sm ml-2">Desliza para continuar</p>
               </div>
            </div>
          </CarouselItem>
          
          <CarouselItem>
            <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center h-full min-h-[50vh] px-4 sm:px-8">
               <div className="space-y-4">
                  <p className="text-lg text-muted-foreground md:text-xl">
                    Cada día te espera UNA única "micro-victoria". Es una acción simple, diseñada para darte un golpe de energía y confianza, sin presión ni juicios.
                  </p>
                   <p className="text-base font-bold text-foreground md:text-lg pt-2">
                    Algunos días volarás, otros, simplemente avanzarás un paso. Ambos son válidos.
                  </p>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Si no te sale, no pasa nada: podés probar una alternativa o tomarte un descanso. Lo importante es que sigas adelante, a tu ritmo y con tu dignidad.
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="group bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg rounded-full font-sans font-bold h-14 px-10 mt-8"
                  onClick={handleStart}
                >
                  OK, me intriga. ¿Cuál es la primera movida?
                </Button>
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    Recordá: Camino es una herramienta de apoyo, no un reemplazo de la ayuda profesional. Hecho con la esperanza de ser un primer paso.
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                     © 2025 Camino. Todos los derechos reservados.
                  </p>
                </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
}
