
'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CookingPot, Home, Users, MessageSquareHeart, HelpCircle, ArrowLeft, HeartPulse } from 'lucide-react';
import type { Mission } from '@/lib/types';

type Category = Mission['category'];

const options: { 
    icon: JSX.Element; 
    title: string; 
    description: string; 
    hoverDescription: string;
    category: Category;
}[] = [
    {
        icon: <CookingPot className="w-10 h-10 mb-4 text-accent" />,
        title: "Operación: Alquimia de Cocina",
        description: "Domina el arte de crear. Empieza por lo básico, termina como un chef.",
        hoverDescription: "Logro Inicial: Alquimista Nivel 1. Tu primera misión será dominar el elemento agua.",
        category: 'cooking'
    },
    {
        icon: <Home className="w-10 h-10 mb-4 text-accent" />,
        title: "Misión: Control de Entorno",
        description: "Tu espacio es tu santuario. Conviértelo en una fortaleza de calma.",
        hoverDescription: "Logro Inicial: Guardián del Orden. La primera misión es establecer un perímetro seguro: tu cama.",
        category: 'organizing'
    },
     {
        icon: <HeartPulse className="w-10 h-10 mb-4 text-accent" />,
        title: "Protocolo: Autocuidado",
        description: "Activa los sistemas básicos que te mantienen en pie y con energía.",
        hoverDescription: "Logro Inicial: Ingeniero de Bienestar. Tu primera tarea es iniciar el protocolo de hidratación.",
        category: 'personal-care'
    },
    {
        icon: <Users className="w-10 h-10 mb-4 text-accent" />,
        title: "Incursión: Mundo Exterior",
        description: "Expande tu territorio. Gana confianza para moverte más allá de tu base.",
        hoverDescription: "Logro Inicial: Explorador Urbano. Tu primera misión: una compra relámpago en territorio cercano.",
        category: 'going-out'
    },
    {
        icon: <MessageSquareHeart className="w-10 h-10 mb-4 text-accent" />,
        title: "Maniobra: Contacto Social",
        description: "Practica interacciones de bajo riesgo para desactivar la ansiedad social.",
        hoverDescription: "Logro Inicial: Diplomático Novato. Tu primera misión es un simple intercambio protocolar: 'buen día'.",
        category: 'social'
    },
     {
        icon: <HelpCircle className="w-10 h-10 mb-4 text-muted-foreground" />,
        title: "Desafío Sorpresa",
        description: "Si elegir es una batalla, deja que te asignemos una misión simple para romper el hielo.",
        hoverDescription: "Empezaremos con algo tan simple que te vas a reír. Pero funcionará.",
        category: 'generic'
    }
]

export default function SetupPage() {
  const router = useRouter();

  const handleSelectCategory = (category: Category) => {
    localStorage.removeItem('completedMissions');
    localStorage.removeItem('activeMissionIndex');
    
    localStorage.setItem('missionCategory', category);
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
              ¿Preferís elegir tu batalla?
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Si no, no pasa nada. Volvé atrás y te damos una misión por defecto. Si preferís elegir, acá tenés algunas rutas.
            </p>
            <Carousel className="w-full max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto mt-12"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
              <CarouselContent>
                {options.map((option, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <Card 
                        onClick={() => handleSelectCategory(option.category)}
                        className="group h-full transform cursor-pointer text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                      >
                          <CardHeader>
                              {option.icon}
                              <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-between">
                              <CardDescription className="text-lg opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:invisible">
                                  {option.description}
                              </CardDescription>
                              <CardDescription className="text-lg text-accent-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:h-auto group-hover:visible h-0">
                                {option.hoverDescription}
                              </CardDescription>
                          </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </main>
  );
}
