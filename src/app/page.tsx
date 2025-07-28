
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
       <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          <CarouselItem>
            <div className="max-w-3xl space-y-6 px-4 sm:px-8">
              <div className="space-y-4">
                 <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Hola,
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl pt-2">
                  Puede que llegaste acá porque sentís que el mundo avanza y vos estás en pausa. Quizás te cuesta arrancar, te tiemblan las manos, o no sabés qué hacer con tu vida.
                </p>
                <p className="text-lg text-foreground font-bold md:text-xl pt-2">
                  No sos un vago. No sos un inútil. Solo estás trabado. Y eso le pasa a muchos más de los que pensás.
                </p>
              </div>

              <div className="space-y-4 text-left">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                  15 días para romper el ciclo del "mañana empiezo".
                </h2>
                <p className="text-base text-muted-foreground md:text-lg text-center">
                  En ese tiempo no vas a cambiar tu vida entera, pero SÍ vas a:
                </p>

                <ul className="space-y-3 text-base text-foreground md:text-lg max-w-2xl mx-auto pt-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Romper la inercia y empezar a hacer algo significativo.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Mejorar tu rutina de sueño (y quienes te rodean lo van a notar).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Completar al menos UNA cosa por día que te haga sentir capaz y en control.</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Tener respuestas claras cuando te pregunten qué hiciste hoy.</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                    <span>Pasar de "no sé por dónde empezar" a "estoy haciendo algo", con un sentido de propósito renovado.</span>
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
            <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center h-full pt-10 px-4 sm:px-8">
               <div className="space-y-4">
                  <p className="text-lg text-muted-foreground md:text-xl">
                    Cada día vas a tener <span className="font-bold text-foreground">UNA tarea simple.</span> No es una lista de pendientes, es una micro-victoria diseñada para darte un golpe de energía y confianza.
                  </p>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Si no te sale, no pasa nada: podés repetirla mañana o tomarte el tiempo que necesites. <span className="font-bold text-foreground">Lo importante no es la velocidad, sino que sigas adelante.</span>
                  </p>
                  <p className="text-base font-bold text-foreground md:text-lg pt-2">
                    Arrancamos desde tu cuarto. Sin salir de casa. Sin presión.
                  </p>
                </div>

                <Link href="/dashboard">
                  <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg rounded-full font-sans font-bold h-14 px-10 mt-8">
                    OK, me intriga. ¿Cuál es la primera misión?
                  </Button>
                </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
}
