
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-3xl space-y-8">
        
        <div className="space-y-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            ¿Por qué 15 días exactamente?
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Porque es el tiempo justo para romper el ciclo de "mañana empiezo" sin prometerte transformaciones mágicas.
            En 15 días no vas a cambiar tu vida entera. Pero SÍ vas a:
          </p>
        </div>

        <ul className="space-y-3 text-left text-xl text-foreground md:text-2xl max-w-2xl mx-auto">
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <span>Romper la inercia de no hacer nada</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <span>Sentir que tenés control sobre algo, aunque sea pequeño</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <span>Probar que podés cumplir compromisos contigo mismo</span>
          </li>
        </ul>

        <div className="space-y-4 pt-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Lo que realmente va a cambiar en 15 días:
          </h2>
        </div>

         <ul className="space-y-3 text-left text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Tu rutina de sueño va a mejorar (y eso tus viejos lo van a notar)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Vas a completar al menos UNA cosa por día que te haga sentir útil</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Vas a tener respuestas concretas cuando te pregunten qué hiciste hoy</span>
          </li>
           <li className="flex items-start">
            <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary/80" />
            <span>Vas a pasar de "no sé ni por dónde empezar" a "estoy haciendo algo"</span>
          </li>
        </ul>

        <div className="space-y-4 pt-4">
          <p className="text-xl text-muted-foreground md:text-2xl">
            No es una transformación épica. Es momentum. Es pasar de estar parado a estar en movimiento, aunque sea lento.
          </p>
          <p className="text-xl font-bold text-foreground md:text-2xl">
            El bonus: cuando empiecen a verte con un poco más de estructura, el ambiente en casa va a mejorar.
            Son cambios pequeños pero reales. Los que necesitás para creer que podés cambiar cosas más grandes después.
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
