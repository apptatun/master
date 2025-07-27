'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CookingPot, Home, Users, MessageSquareHeart, HelpCircle, ArrowRight, ArrowLeft, HeartPulse } from 'lucide-react';
import type { Mission } from '@/lib/types';

type Category = Mission['category'];

const options: { icon: JSX.Element; title: string; description: string; category: Category }[] = [
    {
        icon: <CookingPot className="w-10 h-10 mb-4 text-accent" />,
        title: "Cocinar algo fácil",
        description: "Empezá a preparar tu propia comida, paso a paso.",
        category: 'cooking'
    },
    {
        icon: <Home className="w-10 h-10 mb-4 text-accent" />,
        title: "Ordenar tu espacio",
        description: "Creá un ambiente más tranquilo y organizado.",
        category: 'organizing'
    },
     {
        icon: <HeartPulse className="w-10 h-10 mb-4 text-accent" />,
        title: "Cuidar de vos",
        description: "Pequeños hábitos que te hacen sentir mejor.",
        category: 'personal-care'
    },
    {
        icon: <Users className="w-10 h-10 mb-4 text-accent" />,
        title: "Aprender a salir solo",
        description: "Ganá confianza para moverte por tu cuenta.",
        category: 'going-out'
    },
    {
        icon: <MessageSquareHeart className="w-10 h-10 mb-4 text-accent" />,
        title: "Hablar con alguien",
        description: "Practicá una conversación sin tanta ansiedad.",
        category: 'social'
    },
     {
        icon: <HelpCircle className="w-10 h-10 mb-4 text-accent" />,
        title: "No sé, necesito ayuda",
        description: "Te damos un punto de partida simple y genérico.",
        category: 'generic'
    }
]

export default function SetupPage() {
  const router = useRouter();

  const handleSelectCategory = (category: Category) => {
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
              Elegí una categoría para personalizar tu arranque. Esto nos ayuda a sugerirte los primeros desafíos.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {options.map(option => (
                <Card 
                  key={option.title} 
                  onClick={() => handleSelectCategory(option.category)}
                  className="h-full transform cursor-pointer text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                >
                    <CardHeader>
                        {option.icon}
                        <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription className="text-lg">{option.description}</CardDescription>
                    </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </main>
  );
}
