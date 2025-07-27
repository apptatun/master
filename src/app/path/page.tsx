
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, CookingPot, Home, Users, MessageSquareHeart, HelpCircle, HeartPulse, Shield, Briefcase, BarChart, Rocket } from 'lucide-react';
import type { Path, SubCategory } from '@/lib/types';
import { Suspense } from 'react';

const pathOptions = {
    guarida: [
        {
            icon: <CookingPot className="w-10 h-10 mb-4 text-accent" />,
            title: "Supervivencia Culinaria",
            description: "De microondas a chef casero.",
            category: 'supervivencia-culinaria' as SubCategory
        },
        {
            icon: <Shield className="w-10 h-10 mb-4 text-accent" />,
            title: "Rescate de Territorio",
            description: "Tu cuarto, tu reino organizado.",
            category: 'rescate-de-territorio' as SubCategory
        },
        {
            icon: <Home className="w-10 h-10 mb-4 text-accent" />,
            title: "Dominio Digital",
            description: "Tecnología sin que te domine.",
            category: 'dominio-digital' as SubCategory
        },
        {
            icon: <HeartPulse className="w-10 h-10 mb-4 text-accent" />,
            title: "Finanzas Ninja",
            description: "Dinero básico sin depender de nadie.",
            category: 'finanzas-ninja' as SubCategory
        },
        {
            icon: <BarChart className="w-10 h-10 mb-4 text-accent" />,
            title: "Laboratorio Mental",
            description: "Experimentos de bienestar.",
            category: 'laboratorio-mental' as SubCategory
        }
    ],
    explorador: [
        {
            icon: <Users className="w-10 h-10 mb-4 text-accent" />,
            title: "Primeros Pasos",
            description: "Salir sin que sea una odisea.",
            category: 'primeros-pasos' as SubCategory
        },
        {
            icon: <MessageSquareHeart className="w-10 h-10 mb-4 text-accent" />,
            title: "Interacciones Humanas",
            description: "Hablar sin que tiemblen las manos.",
            category: 'interacciones-humanas' as SubCategory
        },
        {
            icon: <Briefcase className="w-10 h-10 mb-4 text-accent" />,
            title: "Misiones Oficiales",
            description: "Trámites y gestiones como adulto.",
            category: 'misiones-oficiales' as SubCategory
        },
        {
            icon: <HelpCircle className="w-10 h-10 mb-4 text-accent" />,
            title: "Preparación Laboral",
            description: "Primer trabajo sin morir en el intento.",
            category: 'preparacion-laboral' as SubCategory
        },
        {
            icon: <Rocket className="w-10 h-10 mb-4 text-accent" />,
            title: "Aventuras de Crecimiento",
            description: "Desafíos épicos para cuando estés ready.",
            category: 'aventuras-de-crecimiento' as SubCategory
        }
    ]
};

function PathPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') as Path | null;

  if (!mode || !pathOptions[mode]) {
    // Redirect to setup if mode is invalid
    if (typeof window !== 'undefined') {
        router.push('/setup');
    }
    return null;
  }
  
  const options = pathOptions[mode];
  const title = mode === 'guarida' ? 'Modo Guarida' : 'Modo Explorador';

  const handleSelectCategory = (category: SubCategory) => {
    localStorage.setItem('missionPath', ''); // Clear path to prioritize category
    localStorage.setItem('missionCategory', category);
    localStorage.setItem('activeMissionIndex', '0'); // Reset index
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="max-w-5xl w-full">
        <div className="text-left mb-8">
            <Link href="/setup">
                <Button variant="ghost">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a elegir modo
                </Button>
            </Link>
        </div>
        <div className="text-center">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Elegí una categoría para ver tu primera misión.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {options.map((option, index) => (
                <Card 
                  key={index}
                  onClick={() => handleSelectCategory(option.category)}
                  className="group transform cursor-pointer text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                >
                    <CardHeader>
                        {option.icon}
                        <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-lg">
                            {option.description}
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

export default function PathPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <PathPageContent />
        </Suspense>
    )
}
