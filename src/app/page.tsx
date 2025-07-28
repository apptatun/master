
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-3xl space-y-8">
        
        <div className="space-y-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            15 días para romper el ciclo del "mañana empiezo".
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Sin falsas promesas ni transformaciones mágicas.
          </p>
          <p className="text-xl text-muted-foreground md:text-2xl pt-4">
            En ese tiempo no vas a cambiar tu vida entera, pero SÍ vas a:
          </p>
        </div>

        <ul className="space-y-3 text-left text-xl text-foreground md:text-2xl max-w-2xl mx-auto">
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <span>Romper la inercia y empezar a hacer algo</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <span>Sentir que tenés control, aunque sea sobre algo pequeño</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <span>Cumplir compromisos con vos mismo</span>
          </li>
        </ul>

        <div className="space-y-4 pt-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Lo que realmente cambia en 15 días:
          </h2>
        </div>

         <ul className="space-y-3 text-left text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Tu rutina de sueño mejora (y los que te rodean lo van a notar)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Completás al menos UNA cosa por día que te haga sentir capaz</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Tenés respuestas claras cuando te pregunten qué hiciste hoy</span>
          </li>
           <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Pasás de "no sé por dónde empezar" a "estoy haciendo algo"</span>
          </li>
        </ul>

        <div className="space-y-4 pt-4">
          <p className="text-xl text-muted-foreground md:text-2xl">
            No es una transformación épica. Es momentum: pasar de estar parado a moverte, aunque sea lento.
          </p>
          <p className="text-xl font-bold text-foreground md:text-2xl">
            Bonus: cuando empieces a moverte, el ambiente en casa puede mejorar también.
          </p>
           <p className="text-xl font-bold text-foreground md:text-2xl">
            Cambios pequeños, reales. Lo que necesitás para creer que podés ir por más.
          </p>
           <p className="text-xl font-bold text-foreground md:text-2xl pt-2">
            Arrancamos desde tu cuarto. Sin salir de casa. Sin presión.
          </p>
        </div>

        <Link href="/setup">
          <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 text-lg rounded-full font-sans font-bold h-14 px-10">
            OK, estoy listo para empezar
          </Button>
        </Link>
      </div>
    </main>
  );
}
