'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CookingPot, Home, Users, MessageSquareHeart, HelpCircle, ArrowRight } from 'lucide-react';

const options = [
    {
        icon: <CookingPot className="w-10 h-10 mb-4 text-accent" />,
        title: "Cocinar algo fácil",
        description: "Empezá a preparar tu propia comida, paso a paso."
    },
    {
        icon: <Home className="w-10 h-10 mb-4 text-accent" />,
        title: "Ordenar tu espacio",
        description: "Creá un ambiente más tranquilo y organizado."
    },
    {
        icon: <Users className="w-10 h-10 mb-4 text-accent" />,
        title: "Aprender a salir solo",
        description: "Ganá confianza para moverte por tu cuenta."
    },
    {
        icon: <MessageSquareHeart className="w-10 h-10 mb-4 text-accent" />,
        title: "Hablar con alguien",
        description: "Practicá una conversación sin tanta ansiedad."
    },
     {
        icon: <HelpCircle className="w-10 h-10 mb-4 text-accent" />,
        title: "No sé, necesito ayuda",
        description: "Te damos un punto de partida simple y genérico."
    }
]

export default function SetupPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="max-w-4xl text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          ¿Por dónde empezamos?
        </h1>
        <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
          Elegí una categoría para personalizar tu arranque. Esto nos ayuda a sugerirte los primeros desafíos.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {options.map(option => (
            <Link href="/dashboard" key={option.title} className="text-left">
                <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
                    <CardHeader>
                        {option.icon}
                        <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription className="text-lg">{option.description}</CardDescription>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
