import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
           <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Puede que estés en esa etapa rara donde sos técnicamente un adulto… pero no te sentís como tal.
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
           Quizás vivís con tus viejos, te cuesta arrancar, dormís hasta tarde, jugás hasta la madrugada, sentís una bola de ansiedad en el pecho a veces y no sabés bien qué hacer con tu vida.
          </p>
          <p className="text-xl font-bold text-foreground md:text-2xl">
            No sos un vago. No sos un inútil. Solo estás trabado. Y eso le pasa a muchos más de los que pensás.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground md:text-2xl">
            Acá no venimos a darte lecciones ni a decirte que "madures", ni a llenarte de boludeces motivacionales de Instagram. Vinimos porque sabemos que querés cambiar, pero honestamente no sabés ni por dónde empezar sin que todo se sienta abrumador.
          </p>
           <p className="text-xl text-muted-foreground md:text-2xl">
            Es jodido cuando tus viejos te preguntan '¿y qué vas a hacer?' y vos mismo no tenés ni idea. Es jodido levantarse a la tarde y ya sentir que perdiste el día. Es jodido sentir que el corazón te va a mil cuando tenés que hablar con alguien que no conocés. Pero ¿sabés qué? No sos el único. Solo que nadie habla de esto porque da vergüenza admitirlo.
          </p>
          <p className="text-xl text-muted-foreground md:text-2xl">
            ¿La buena noticia? No necesitás una transformación épica de la noche a la mañana. Necesitás romper el hielo. Necesitás una primera victoria pequeña que te recuerde que las cosas pueden ser diferentes.
          </p>
           <p className="text-xl text-muted-foreground md:text-2xl">
            No te vamos a pedir que cambies tu vida. Te vamos a pedir que hagas UNA cosa. Una sola. Y cuando la hagas, vas a entender por qué esto funciona. La primera misión no te la vamos a decir acá. Tenés que entrar para verla.
          </p>
        </div>
        <Link href="/setup">
          <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
            OK, me intriga. ¿Cuál es el primer desafío?
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
