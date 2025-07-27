
'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
        title: "Cocinar algo fácil",
        description: "Empezá a preparar tu propia comida, paso a paso.",
        hoverDescription: "Primera misión: hervir agua. Riesgo: bajo. Recompensa: una bebida caliente.",
        category: 'cooking'
    },
    {
        icon: <Home className="w-10 h-10 mb-4 text-accent" />,
        title: "Ordenar tu espacio",
        description: "Creá un ambiente más tranquilo y organizado.",
        hoverDescription: "Primera misión: hacer la cama. Un pequeño gesto que cambia tu día.",
        category: 'organizing'
    },
     {
        icon: <HeartPulse className="w-10 h-10 mb-4 text-accent" />,
        title: "Cuidar de vos",
        description: "Pequeños hábitos que te hacen sentir mejor.",
        hoverDescription: "Primera misión: un vaso de agua al despertar. Hidratación = victoria.",
        category: 'personal-care'
    },
    {
        icon: <Users className="w-10 h-10 mb-4 text-accent" />,
        title: "Aprender a salir solo",
        description: "Ganá confianza para moverte por tu cuenta.",
        hoverDescription: "Primera misión: comprar UNA cosa en el almacén más cercano.",
        category: 'going-out'
    },
    {
        icon: <MessageSquareHeart className="w-10 h-10 mb-4 text-accent" />,
        title: "Hablar con alguien",
        description: "Practicá una conversación sin tanta ansiedad.",
        hoverDescription: "Primera misión: decir 'buen día' al entrar a un negocio.",
        category: 'social'
    },
     {
        icon: <HelpCircle className="w-10 h-10 mb-4 text-muted-foreground" />,
        title: "No sé por dónde empezar",
        description: "Te damos un punto de partida simple y genérico para romper el hielo.",
        hoverDescription: "Empezaremos con algo muy simple para que veas que podés.",
        category: 'generic'
    }
]

export default function SetupPage() {
  const router = useRouter();

  const handleSelectCategory = (category: Category) => {
    // Clear previous progress when selecting a new path
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
              ¿Por dónde empezamos?
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Sabemos que moverse cuesta. Pero vas a poder. Elegí lo que más te resuene hoy.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {options.map(option => (
                <Card 
                  key={option.title} 
                  onClick={() => handleSelectCategory(option.category)}
                  className="group h-full transform cursor-pointer text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                >
                    <CardHeader>
                        {option.icon}
                        <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription className="text-lg opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-hover:h-0">
                            {option.description}
                        </CardDescription>
                         <CardDescription className="text-lg text-accent-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                           {option.hoverDescription}
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
