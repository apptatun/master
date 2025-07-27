import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Estás en pausa. El mundo sigue girando.
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            No vinimos a darte lecciones ni a decirte que "madures". Vinimos a
            proponerte algo mucho mejor: que arranques tu propia vida. En serio.
            A tu ritmo. Desde hoy.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground md:text-2xl">
            ¿La buena noticia? No necesitás una transformación épica. Necesitás romper el hielo. Necesitás una primera victoria, por pequeña que sea, que te recuerde que <span className="font-bold text-foreground">SÍ podés.</span>
          </p>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Te propongo algo: arranquemos con algo tan simple que te va a dar risa.
          </p>
        </div>
        <Link href="/dashboard">
          <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
            OK, me intriga. ¿Cuál es la primera misión?
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
