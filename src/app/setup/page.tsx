
'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Home, Globe } from 'lucide-react';
import type { Path } from '@/lib/types';

const paths: { 
    icon: JSX.Element; 
    title: string; 
    description: string; 
    path: Path;
}[] = [
    {
        icon: <Home className="w-12 h-12 mb-4 text-accent" />,
        title: "Modo Guarida",
        description: "Primero dominá tu territorio. Acciones dentro de casa, tu zona segura.",
        path: 'guarida'
    },
    {
        icon: <Globe className="w-12 h-12 mb-4 text-accent" />,
        title: "Modo Explorador",
        description: "Conquistá el mundo exterior. Misiones fuera de casa, para expandir tu zona.",
        path: 'explorador'
    }
]

export default function SetupPage() {
  const router = useRouter();

  const handleSelectPath = (path: Path) => {
    localStorage.clear(); // Clear all previous progress
    localStorage.setItem('missionPath', path);
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="max-w-4xl w-full">
         <div className="text-left mb-8">
            <Link href="/">
                <Button variant="ghost">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a la explicación
                </Button>
            </Link>
        </div>
        <div className="text-center">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              ¿Por dónde empezamos tu entrenamiento?
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Elegí tu campo de batalla. Podés cambiar cuando quieras.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {paths.map((p, index) => (
                    <Card 
                        key={index}
                        onClick={() => handleSelectPath(p.path)}
                        className="group transform cursor-pointer text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center p-8"
                    >
                        <CardHeader className="items-center">
                            {p.icon}
                            <CardTitle className="text-4xl font-bold">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-xl">
                                {p.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
