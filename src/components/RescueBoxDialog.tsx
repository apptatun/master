
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Ear, Eye, Hand, Quote, Wind, Droplets, Smile, Shirt, Apple, ClipboardCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const groundingSteps = [
    { icon: Eye, text: "Nombra 5 cosas que puedas ver a tu alrededor." },
    { icon: Hand, text: "Identifica 4 cosas que puedas sentir (la ropa, la silla, tus pies en el suelo)." },
    { icon: Ear, text: "Escucha 3 sonidos distintos (tu respiración, un ruido lejano, el silencio)." },
];

const thoughtBank = [
    'No tengo que tener todo resuelto hoy.',
    'Está bien ir lento, siempre y cuando no me detenga.',
    'Esto también va a pasar.',
    'Mi valor no se mide por mi productividad.',
];

const autocuidadoItems = [
    { icon: Droplets, text: 'Beber un vaso de agua' },
    { icon: Smile, text: 'Cepillarse los dientes' },
    { icon: Shirt, text: 'Ponerse ropa limpia' },
    { icon: Apple, text: 'Comer una fruta o algo ligero' },
];

export function RescueBoxDialog({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeQuote, setActiveQuote] = useState('');

  useEffect(() => {
    if (isOpen) {
        // Select a new random quote every time the dialog opens
        const randomIndex = Math.floor(Math.random() * thoughtBank.length);
        setActiveQuote(thoughtBank[randomIndex]);
        // Reset the grounding exercise
        setCurrentStep(0);
    }
  }, [isOpen]);


  const handleNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % groundingSteps.length);
  };

  const CurrentIcon = groundingSteps[currentStep].icon;
    
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl">Caja de Rescate</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Herramientas de acción rápida para cuando todo abruma. Sin presión, solo una ayuda para volver a tu centro.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="respiracion" className="w-full flex-grow flex flex-col min-h-0 pt-2">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="respiracion"><Wind className="h-4 w-4 sm:mr-2"/> <span className="hidden sm:inline">Respirar</span></TabsTrigger>
            <TabsTrigger value="anclaje"><Hand className="h-4 w-4 sm:mr-2"/> <span className="hidden sm:inline">Anclaje</span></TabsTrigger>
            <TabsTrigger value="frase"><Quote className="h-4 w-4 sm:mr-2"/> <span className="hidden sm:inline">Frase</span></TabsTrigger>
            <TabsTrigger value="autocuidado"><ClipboardCheck className="h-4 w-4 sm:mr-2"/> <span className="hidden sm:inline">Autocuidado</span></TabsTrigger>
          </TabsList>
          
          <div className="flex-grow overflow-y-auto mt-4">
            <TabsContent value="respiracion" className="h-full">
              <div className="flex flex-col items-center justify-center text-center h-full p-4 border rounded-lg bg-background/50">
                  <p className="text-lg text-muted-foreground mb-6">Sigue el ritmo del círculo. Inhala cuando crece, exhala cuando se encoge.</p>
                  <div className="relative w-40 h-40 flex items-center justify-center">
                      <div className="absolute w-full h-full bg-accent/20 rounded-full animate-pulse-slow"></div>
                      <div className="absolute w-40 h-40 bg-accent/80 rounded-full animate-breath"></div>
                      <p className="z-10 text-accent-foreground font-bold text-lg">Respira</p>
                  </div>
              </div>
            </TabsContent>

            <TabsContent value="anclaje" className="h-full">
               <div className="flex flex-col items-center justify-between text-center h-full p-4 border rounded-lg bg-background/50">
                    <div>
                        <p className="text-lg text-muted-foreground mb-6">Usa tus sentidos para volver al presente. Completa un paso a la vez.</p>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                            <CurrentIcon className="h-10 w-10 text-secondary-foreground mt-1 flex-shrink-0" />
                            <p className="text-xl text-secondary-foreground font-semibold text-left">
                                {groundingSteps[currentStep].text}
                            </p>
                        </div>
                    </div>
                    <Button onClick={handleNextStep} className="mt-6 w-full">
                        {currentStep < groundingSteps.length - 1 ? 'Siguiente paso' : 'Empezar de nuevo'}
                    </Button>
                </div>
            </TabsContent>

            <TabsContent value="frase" className="h-full">
              <div className="flex flex-col items-center justify-center text-center h-full p-8 border rounded-lg bg-background/50">
                  <Quote className="h-12 w-12 text-accent mb-4" />
                  <p className="text-3xl font-bold font-headline text-foreground leading-tight">
                    {activeQuote}
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">Repítelo las veces que necesites. Es un permiso para estar en proceso.</p>
              </div>
            </TabsContent>

            <TabsContent value="autocuidado" className="h-full">
              <div className="flex flex-col text-left h-full p-4 border rounded-lg bg-background/50">
                  <p className="text-lg text-muted-foreground mb-4">Para cuando la energía no alcanza ni para lo básico. Esto no es una orden, es un recordatorio amable de lo que tu cuerpo necesita.</p>
                  <div className="space-y-3">
                      {autocuidadoItems.map(item => {
                          const Icon = item.icon;
                          return (
                            <div key={item.text} className="flex items-center gap-4 p-3 rounded-lg bg-secondary">
                                <Icon className="h-6 w-6 text-secondary-foreground flex-shrink-0" />
                                <p className="text-lg text-secondary-foreground font-semibold">
                                    {item.text}
                                </p>
                            </div>
                          );
                      })}
                  </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <DialogFooter className="mt-auto pt-4 border-t">
          <Button onClick={onClose} className="w-full sm:w-auto">Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
